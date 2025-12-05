/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { parse } from "cookie";
import { setCookie } from "./tokenHandlers";
import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth/auth.validation";

type UserRole = "owner" | "manager" | "admin";

/** Map user roles → API endpoints & cookie names */
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

export const loginOwnerAdminManager = async (_currentState: any, formData: any) => {

  console.log("login formData", formData)

  try {
    // ---- Get role from form ----
    const role = formData.get("role") as UserRole;
    if (!role || !RoleConfig[role]) {
      return { success: false, message: "Invalid role selected" };
    }

    const { api, access: accessKey, refresh: refreshKey } = RoleConfig[role];

    // ---- Build payload and validate ----
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validation = zodValidator(payload, loginValidationZodSchema);
    if (!validation.success) return validation;

    const body = JSON.stringify(validation.data);

    // ---- Send login request to backend ----
    console.log("checkAPI", api)
    const res = await serverFetch.post(api, {
      body,
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    if (!result.success) return result;

    // ---- Extract Set-Cookie headers from backend ----
    const setCookieHeaders = res.headers.getSetCookie();
    if (!setCookieHeaders) throw new Error("No Set-Cookie received from backend");

    // ---- Parse cookies safely ----
    let accessParsed: Record<string, string | undefined> | null = null;
    let refreshParsed: Record<string, string | undefined> | null = null;

    setCookieHeaders.forEach((cookieStr: string) => {
      const parsed: Record<string, string | undefined> = parse(cookieStr);

      if (parsed[accessKey]) accessParsed = parsed;
      if (parsed[refreshKey]) refreshParsed = parsed;
    });

    if (!accessParsed || !refreshParsed) {
      throw new Error("Missing access or refresh token cookies");
    }

    // ---- Set cookies using Next.js server cookie API ----
    await setCookie(accessKey, String(accessParsed[accessKey]), {
      httpOnly: true,
      secure: true,
      maxAge: parseInt(accessParsed["Max-Age"] ?? "3600"),
      path: accessParsed["Path"] ?? "/",
      sameSite: (accessParsed["SameSite"] as any) ?? "strict",
    });

    await setCookie(refreshKey, String(refreshParsed[refreshKey]), {
      httpOnly: true,
      secure: true,
      maxAge: parseInt(refreshParsed["Max-Age"] ?? String(3600 * 24 * 90)),
      path: refreshParsed["Path"] ?? "/",
      sameSite: (refreshParsed["SameSite"] as any) ?? "strict",
    });

    // ---- Return success ----
    return { success: true, message: "Login successful", role };
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