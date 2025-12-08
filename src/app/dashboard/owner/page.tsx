/* eslint-disable @typescript-eslint/no-explicit-any */
import serverFetch from "@/lib/server-fetch";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
  const res = await serverFetch.get("booking/get-bookings", {}, "ownerAccess");
  const data = await res.json();

  const allBookings =
    data?.turfItems?.flatMap(
      (item: any) =>
        item?.bookings?.map((booking: any) => ({
          ...booking,
          itemName: item?.name ?? "Unknown Item",
        })) ?? []
    ) ?? [];

  const noBookings = allBookings.length === 0;

  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-[#1A80E3]">
        All Bookings
      </h2>

      <div className="overflow-x-auto">
        {noBookings ? (
          <div className="text-center py-10 text-gray-500 font-medium">
            No bookings found.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-[#1A80E3] hover:bg-[#1A80E3]">
                <TableHead className="text-white">Item</TableHead>
                <TableHead className="text-white">User</TableHead>
                <TableHead className="text-white">Start</TableHead>
                <TableHead className="text-white">End</TableHead>
                <TableHead className="text-white">Amount</TableHead>
                <TableHead className="text-white">Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {allBookings.map((booking: any) => (
                <TableRow
                  key={booking.id}
                  className="hover:bg-blue-50 transition"
                >
                  <TableCell className="font-medium">
                    {booking.itemName}
                  </TableCell>

                  <TableCell>{booking.turfUser?.name || "N/A"}</TableCell>

                  <TableCell>
                    {booking.startTime
                      ? new Date(booking.startTime).toLocaleString()
                      : "N/A"}
                  </TableCell>

                  <TableCell>
                    {booking.endTime
                      ? new Date(booking.endTime).toLocaleString()
                      : "N/A"}
                  </TableCell>

                  <TableCell className="font-semibold">
                    {booking.paymentAmount ?? "0"} ৳
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={
                        booking.status === "PENDING"
                          ? "bg-yellow-600"
                          : booking.status === "PAID"
                          ? "bg-green-600"
                          : "bg-gray-600"
                      }
                    >
                      {booking.status ?? "UNKNOWN"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
