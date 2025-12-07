/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { parse } from "cookie";
import { setCookie } from "./tokenHandlers";
import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth/auth.validation";
import { redirect } from "next/navigation";

type UserRole = "owner" | "manager" | "admin";

const RoleConfig = {
  owner: {
    api: "auth/login/owner",
    access: "ownerAccess",
    refresh: "ownerRefresh",
  },
  manager: {
    api: "auth/login/manager",
    access: "managerAccess",
    refresh: "managerRefresh",
  },
  admin: {
    api: "auth/login/admin",
    access: "adminAccess",
    refresh: "adminRefresh",
  },
} as const;

const loginOwnerAdminManager = async (_currentState: any, formData: any) => {
  try {
    // ---- Get role ----
    const role = formData.get("role") as UserRole;
    if (!role || !RoleConfig[role]) {
      return { success: false, message: "Invalid role selected" };
    }

    const redirectTo = formData.get("redirect") as string | null;

    const { api, access: accessKey, refresh: refreshKey } = RoleConfig[role];

    // ---- Validate ----
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validation = zodValidator(payload, loginValidationZodSchema);
    if (!validation.success) return validation;

    const body = JSON.stringify(validation.data);

    // ---- Login request ----
    const res = await serverFetch.post(api, {
      body,
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    if (!result.success) {
      throw new Error(result.message || "Login failed");
    }

    // ---- Read cookies ----
    const setCookieHeaders = res.headers.getSetCookie();
    if (!setCookieHeaders) throw new Error("No Set-Cookie received from backend");

    let accessParsed = null;
    let refreshParsed = null;

    setCookieHeaders.forEach((cookieStr: string) => {
      const parsed = parse(cookieStr);

      if (parsed[accessKey]) accessParsed = parsed;
      if (parsed[refreshKey]) refreshParsed = parsed;
    });

    if (!accessParsed || !refreshParsed)
      throw new Error("Missing access or refresh token cookies");

    // ---- Set cookies ----
    await setCookie(accessKey, String(accessParsed[accessKey]), {
      httpOnly: true,
      secure: true,
      maxAge: parseInt(accessParsed["Max-Age"] ?? "3600"),
      path: accessParsed["Path"] ?? "/",
      sameSite: accessParsed["SameSite"] as any,
    });

    await setCookie(refreshKey, String(refreshParsed[refreshKey]), {
      httpOnly: true,
      secure: true,
      maxAge: parseInt(refreshParsed["Max-Age"] ?? String(3600 * 24 * 90)),
      path: refreshParsed["Path"] ?? "/",
      sameSite: refreshParsed["SameSite"] as any,
    });

    //REDIRECT AFTER SUCCESS 
    if (redirectTo) {
      const requestedPath = redirectTo.toString();
      redirect(`${requestedPath}?loggedIn=true`);
    }

    // ---- Default redirect per role ----
    if (role === "owner") redirect("/dashboard/owner?loggedIn=true");
    if (role === "manager") redirect("/dashboard/manager?loggedIn=true");
    if (role === "admin") redirect("/dashboard/admin?loggedIn=true");

  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;

    console.error("LOGIN ERROR:", err);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Login failed. Check your email and password.",
    };
  }
};

export default loginOwnerAdminManager;
