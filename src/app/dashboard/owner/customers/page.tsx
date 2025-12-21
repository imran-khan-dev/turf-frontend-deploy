/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomersTable from "@/components/modules/TurfUser/GetAllTurfUsers";
import serverFetch from "@/lib/server-fetch";

export default async function CustomersPage() {
  let customers: any[] = [];
  let error: string | null = null;

  try {
    // 1. Fetch turf profile
    const res = await serverFetch.get(
      "user/my-turf-profile",
      {},
      "ownerAccess"
    );

    if (!res.ok) {
      error = "Failed to load your turf profile.";
    } else {
      const data = await res.json();
      const turfProfileId = data?.data?.[0]?.id;

      if (!turfProfileId) {
        error = "No turf profile found.";
      } else {
        // 2. Fetch customers
        const res2 = await serverFetch.get(
          `turf-user/all?turfProfileId=${turfProfileId}`,
          {},
          "ownerAccess"
        );

        if (!res2.ok) {
          error = "Failed to load customers.";
        } else {
          const data2 = await res2.json();
          customers = data2?.data ?? [];
        }
      }
    }
  } catch {
    error = "Something went wrong while loading customers.";
  }

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
        All Customers of Turf
      </h2>

      <CustomersTable customers={customers} error={error} />
    </div>
  );
}
