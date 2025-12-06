// export type UserRole = "ADMIN" | "OWNER" | "MANAGER" | "TURF_USER" | "COMMON" | null;

// const ROLE_TOKEN_MAP: Record<string, string> & { null: string } = {
//   ADMIN: "adminAccess",
//   OWNER: "ownerAccess",
//   MANAGER: "managerAccess",
//   TURF_USER: "turfUserAccess",
//   COMMON: "ownerAccess", // fallback for shared routes
//   null: "ownerAccess",   // fallback for public routes
// };

// /**
//  * Returns the token/cookie name based on the URL path
//  * @param pathname - URL path e.g., "/dashboard/admin"
//  * @returns token name string e.g., "adminAccess"
//  */
// export function getTokenTypeFromPath(pathname: string): string {
//   if (pathname.startsWith("/dashboard/admin")) return ROLE_TOKEN_MAP.ADMIN;
//   if (pathname.startsWith("/dashboard/owner")) return ROLE_TOKEN_MAP.OWNER;
//   if (pathname.startsWith("/dashboard/manager")) return ROLE_TOKEN_MAP.MANAGER;
//   if (pathname.startsWith("/dashboard/turf-user")) return ROLE_TOKEN_MAP.TURF_USER;

//   // Default /dashboard or unknown routes
//   return ROLE_TOKEN_MAP.COMMON;
// }


export type UserRole = "ADMIN" | "OWNER" | "MANAGER" | "TURF_USER" | "COMMON";

const ROLE_TOKEN_MAP: Record<UserRole, string> = {
    ADMIN: "adminAccess",
    OWNER: "ownerAccess",
    MANAGER: "managerAccess",
    TURF_USER: "turfUserAccess",
    COMMON: "ownerAccess",
};

export function getTokenTypeFromPath(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean);
    // Examples:
    // /dashboard/admin → ["dashboard", "admin"]
    // /dhanmonddi-turf/user-dashboard → ["dhanmonddi-turf", "user-dashboard"]
    // /dhanmonddi-turf/turf-user/login → ["dhanmonddi-turf", "turf-user", "login"]

    // --- TURF USER LOGIC ---
    // Turf user dashboard → /{slug}/user-dashboard
    if (segments.length === 2 && segments[1] === "user-dashboard") {
        return ROLE_TOKEN_MAP.TURF_USER;
    }

    // Turf user login → /{slug}/turf-user/login
    if (segments.length === 3 && segments[1] === "turf-user" && segments[2] === "login") {
        return ROLE_TOKEN_MAP.TURF_USER;
    }

    // --- ADMIN ---
    if (pathname.startsWith("/dashboard/admin")) return ROLE_TOKEN_MAP.ADMIN;
    if (pathname.startsWith("/admin")) return ROLE_TOKEN_MAP.ADMIN;

    // --- OWNER ---
    if (pathname.startsWith("/dashboard/owner")) return ROLE_TOKEN_MAP.OWNER;
    if (pathname.startsWith("/owner")) return ROLE_TOKEN_MAP.OWNER;

    // --- MANAGER ---
    if (pathname.startsWith("/dashboard/manager")) return ROLE_TOKEN_MAP.MANAGER;
    if (pathname.startsWith("/manager")) return ROLE_TOKEN_MAP.MANAGER;

    // Default fallback for unknown dashboard routes
    if (pathname.startsWith("/dashboard")) {
        return ROLE_TOKEN_MAP.COMMON;
    }

    return ROLE_TOKEN_MAP.COMMON;
}
