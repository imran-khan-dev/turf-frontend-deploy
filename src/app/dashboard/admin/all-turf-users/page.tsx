/* eslint-disable @typescript-eslint/no-explicit-any */
import TurfUsersTable from "@/components/modules/Admin/GetAllTurfUsersTable";
import serverFetch from "@/lib/server-fetch";

export default async function AllTurfUsersAdminPage() {
  let users: any[] = [];
  let error: string | null = null;

  try {
    const res = await serverFetch.get(
      "turf-user/all-turf-users-admin",
      {},
      "adminAccess"
    );

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        error = "You are not authorized to view this data.";
      } else {
        error = "Failed to load turf users. Please try again.";
      }
    } else {
      const data = await res.json();
      users = data?.data ?? [];
    }
  } catch (err) {
    error = "Something went wrong while fetching turf users.";
  }

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-[#1A80E3]">
        All Turf Users
      </h2>

      <div className="overflow-x-auto">
        <TurfUsersTable users={users} error={error} />
      </div>
    </div>
  );
}
