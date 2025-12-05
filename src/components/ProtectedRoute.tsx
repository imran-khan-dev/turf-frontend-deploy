// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function ProtectedRoute({ allowed, children }: any) {
//   const router = useRouter();
//   const [role, setRole] = useState<string | null>(null);

//   useEffect(() => {
//     async function load() {
//       const res = await fetch("/api/auth/me", { credentials: "include" });
//       if (!res.ok) return router.push("/");
//       const data = await res.json();
//       setRole(data.role);

//       if (!allowed.includes(data.role)) router.push("/");
//     }
//     load();
//   }, []);

//   if (!role) return <div>Loading...</div>;

//   return children;
// }
