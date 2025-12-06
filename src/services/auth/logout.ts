"use server";

import { serverFetch } from "@/lib/server-fetch";
import { deleteCookie } from "./tokenHandlers";

export async function logoutUser(role: "owner" | "manager" | "turfUser" | "admin") {
  try {
    // 1Call backend logout API
    const res = await serverFetch.post("/auth/logout", {
      body: JSON.stringify({ role }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    // 2Delete frontend cookies based on role
    if (role === "owner") {
      await deleteCookie("ownerAccess");
      await deleteCookie("ownerRefresh");
    }

    if (role === "manager") {
      await deleteCookie("managerAccess");
      await deleteCookie("managerRefresh");
    }

    if (role === "admin") {
      await deleteCookie("adminAccess");
      await deleteCookie("adminRefresh");
    }

    if (role === "turfUser") {
      await deleteCookie("turfUserAccess");
      await deleteCookie("turfUserRefresh");
    }

    return {
      success: true,
      message: result.message || "Logged out successfully",
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Logout error:", err);

    return {
      success: false,
      message: "Logout failed",
    };
  }
}
