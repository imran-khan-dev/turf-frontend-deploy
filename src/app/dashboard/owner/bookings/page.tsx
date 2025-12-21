/* eslint-disable @typescript-eslint/no-explicit-any */

import BookingsTableOwner from "@/components/modules/Booking/BookingsTableOwner";
import serverFetch from "@/lib/server-fetch";

export default async function OwnerBookingsPage() {
  let bookings: any[] = [];
  let error: string | null = null;

  try {
    const res = await serverFetch.get(
      "booking/get-bookings",
      {},
      "ownerAccess"
    );

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        error = "You are not authorized to view bookings.";
      } else {
        error = "Failed to load bookings. Please try again.";
      }
    } else {
      const data = await res.json();

      bookings =
        data?.data?.bookings?.map((b: any) => ({
          id: b.id,
          itemName: b.turfField?.name ?? "Unknown Item",
          userName: b.turfUser?.name || b.user?.name || "N/A",
          startTime: b.startTime,
          endTime: b.endTime,
          paymentAmount: b.paymentAmount ?? 0,
          status: b.status ?? "UNKNOWN",
        })) ?? [];
    }
  } catch (err) {
    error = "Something went wrong while fetching bookings.";
  }

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
        All Bookings
      </h2>

      <BookingsTableOwner
        initialBookings={bookings}
        error={error}
      />
    </div>
  );
}
