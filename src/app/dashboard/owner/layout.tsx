/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { getCookie } from "@/services/auth/tokenHandlers";
// import { getUserFromToken } from "@/services/auth/getUserFromToken";
// import Sidebar from "@/components/modules/dashboard/sidebar/Sidebar";
// import Navbar from "@/components/modules/dashboard/navbar/Navbar";

// // Map backend uppercase role → frontend camelCase role
// function mapRole(tokenRole: string | undefined) {
//   if (!tokenRole) return null;

//   const roleMap: Record<string, "owner" | "manager" | "turfUser" | "admin"> = {
//     OWNER: "owner",
//     MANAGER: "manager",
//     ADMIN: "admin",
//     TURF_USER: "turfUser",
//   };

//   return roleMap[tokenRole] ?? null;
// }

// export default async function DashboardLayout({ children }: any) {
//   const accessToken = await getCookie("ownerAccess");
//   const user = accessToken ? getUserFromToken(accessToken) : null;

//   const role = mapRole(user?.role);

//   return (
//     <div className="flex h-screen">
//       <Sidebar role={role!} />
//       <div className="flex-1 flex flex-col">
//         <Navbar user={user} />
//         <main className="flex-1 overflow-y-auto p-6 bg-muted/10">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

import DashboardShell from "@/components/modules/dashboard/DashboardShell";
import { getUserFromToken } from "@/services/auth/getUserFromToken";
import { getCookie } from "@/services/auth/tokenHandlers";

function mapRole(tokenRole: string | undefined) {
  if (!tokenRole) return null;

  const roleMap: Record<string, "owner" | "manager" | "turfUser" | "admin"> = {
    OWNER: "owner",
    MANAGER: "manager",
    ADMIN: "admin",
    TURF_USER: "turfUser",
  };

  return roleMap[tokenRole] ?? null;
}

export default async function DashboardLayout({ children }: any) {
  const accessToken = await getCookie("ownerAccess");
  const user = accessToken ? getUserFromToken(accessToken) : null;

  const role = mapRole(user?.role);

  return (
    <DashboardShell user={user} role={role}>
      {children}
    </DashboardShell>
  );
}
