/* eslint-disable @typescript-eslint/no-explicit-any */
import TurfUsersTable from "@/components/modules/Admin/GetAllTurfUsersTable";
import serverFetch from "@/lib/server-fetch";

export default async function AllTurfUsersAdminPage() {
  const res = await serverFetch.get(
    "turf-user/all-turf-users-admin",
    {},
    "adminAccess"
  );

  const data = await res.json();
  const users = data?.data ?? [];

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
        All Turf Users
      </h2>

      <div className="overflow-x-auto">
        <TurfUsersTable users={users} />
      </div>
    </div>
  );
}
