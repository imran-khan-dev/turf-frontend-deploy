/* eslint-disable @typescript-eslint/no-explicit-any */
import GetAllOwnersTable from "@/components/modules/Admin/GetAllOwnersTable";
import serverFetch from "@/lib/server-fetch";

export default async function AllTurfOwnersPage() {
  let owners: any[] = [];

  let error: string | null = null;

  try {
    const res = await serverFetch.get("user/get-owners", {}, "adminAccess");
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        error = "You are not authorized to view this data.";
      } else {
        error = "Failed to load turf users. Please try again.";
      }
    } else {
      const data = await res.json();
      owners = data?.data ?? [];
    }
  } catch (error) {}

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
        All Turf Owners
      </h2>

      <GetAllOwnersTable owners={owners} error={error} />
    </div>
  );
}
