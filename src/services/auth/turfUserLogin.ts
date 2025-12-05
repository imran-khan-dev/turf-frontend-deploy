/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { parse } from "cookie";
import { setCookie } from "./tokenHandlers";
import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth/auth.validation";

export const turfUserlogin = async (_currentState: any, formData: any) => {

  console.log("turfUserlogin", formData)

  try {
    // Extract form data
    const email = formData.get("email");
    const password = formData.get("password");
    const turfProfileSlug = formData.get("turfProfileSlug");

    if (!turfProfileSlug) {
      return { success: false, message: "Missing turf profile slug" };
    }

    // Validate email/password using Zod
    const validation = zodValidator(
      { email, password },
      loginValidationZodSchema
    );

    if (!validation.success) return validation;

    // Build full body (validation data + slug)
    const body = JSON.stringify({
      ...validation.data,
      turfProfileSlug, // <-- FIXED! Now included
    });

    console.log("checkAPI", body)

    // Call backend Turf User login API
    const res = await serverFetch.post("auth/login/turf-user", {
      body,
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log("checkAPIResult", result)

    if (!result.success) return result;

    console.log("checkAPIResult", result)

    // Extract cookies
    const setCookieHeaders = res.headers.getSetCookie();
    if (!setCookieHeaders) throw new Error("Backend did not send cookies");

    let accessParsed: any = null;
    let refreshParsed: any = null;

    setCookieHeaders.forEach((cookieStr: string) => {
      const parsed = parse(cookieStr);

      if (parsed["turfUserAccess"]) accessParsed = parsed;
      if (parsed["turfUserRefresh"]) refreshParsed = parsed;
    });

    if (!accessParsed || !refreshParsed) {
      throw new Error("Missing turfUser cookies");
    }

    // Store cookies in Next.js
    await setCookie("turfUserAccess", accessParsed["turfUserAccess"], {
      httpOnly: true,
      secure: true,
      path: accessParsed["Path"] ?? "/",
      maxAge: Number(accessParsed["Max-Age"] ?? "3600"),
      sameSite: accessParsed["SameSite"] ?? "strict",
    });

    await setCookie("turfUserRefresh", refreshParsed["turfUserRefresh"], {
      httpOnly: true,
      secure: true,
      path: refreshParsed["Path"] ?? "/",
      maxAge: Number(refreshParsed["Max-Age"] ?? 3600 * 24 * 90),
      sameSite: refreshParsed["SameSite"] ?? "strict",
    });

    // Done
    return {
      success: true,
      message: "Turf user login successful",
      turfProfileSlug,
    };
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;

    console.error("Turf User Login Error:", err);

    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Turf user login failed.",
    };
  }
};

export default turfUserlogin;
