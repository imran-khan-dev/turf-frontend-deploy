// "use client";
// import { useState, useMemo } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { payNowAction } from "./PayButton";

// interface Booking {
//   id: string;
//   itemName: string;
//   userName: string;
//   startTime: string;
//   endTime: string;
//   paymentAmount: number;
//   status: string;
//   paymentId: string | null;
// }

// interface Props {
//   initialBookings: Booking[];
//   error?: string | null;
// }

// export default function BookingsTable({ initialBookings, error }: Props) {
//   const [statusFilter, setStatusFilter] = useState<string>("ALL");
//   const [minAmount, setMinAmount] = useState<number | "">("");
//   const [maxAmount, setMaxAmount] = useState<number | "">("");

//   // Filtered bookings
//   const filteredBookings = useMemo(() => {
//     return initialBookings.filter((b) => {
//       if (statusFilter !== "ALL" && b.status !== statusFilter) return false;
//       if (minAmount !== "" && b.paymentAmount < minAmount) return false;
//       if (maxAmount !== "" && b.paymentAmount > maxAmount) return false;
//       return true;
//     });
//   }, [initialBookings, statusFilter, minAmount, maxAmount]);

//   // Show error UI
//   if (error) {
//     return (
//       <div className="text-center py-10 text-red-600 font-medium bg-red-50 rounded-lg">
//         {error}
//       </div>
//     );
//   }

//   // Empty state
//   if (!initialBookings || initialBookings.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-500 font-medium">
//         No bookings found.
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Filters */}
//       <div className="mb-4 flex flex-wrap gap-4 items-center">
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="border p-1 rounded"
//         >
//           <option value="ALL">All Status</option>
//           <option value="PENDING">Pending</option>
//           <option value="CONFIRMED">Confirmed</option>
//           <option value="CANCELLED">Cancelled</option>
//         </select>

//         <input
//           type="number"
//           placeholder="Min Amount"
//           value={minAmount}
//           onChange={(e) =>
//             setMinAmount(e.target.value ? Number(e.target.value) : "")
//           }
//           className="border p-1 rounded w-24"
//         />

//         <input
//           type="number"
//           placeholder="Max Amount"
//           value={maxAmount}
//           onChange={(e) =>
//             setMaxAmount(e.target.value ? Number(e.target.value) : "")
//           }
//           className="border p-1 rounded w-24"
//         />
//       </div>

//       <Table>
//         <TableHeader>
//           <TableRow className="bg-[#1A80E3] hover:bg-[#1A80E3]">
//             <TableHead className="text-white">Item</TableHead>
//             <TableHead className="text-white">User</TableHead>
//             <TableHead className="text-white">Start</TableHead>
//             <TableHead className="text-white">End</TableHead>
//             <TableHead className="text-white">Amount</TableHead>
//             <TableHead className="text-white">Status</TableHead>
//             <TableHead className="text-white">Payment</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {filteredBookings.map((booking) => (
//             <TableRow key={booking.id} className="hover:bg-blue-50 transition">
//               <TableCell>{booking.itemName}</TableCell>
//               <TableCell>{booking.userName}</TableCell>
//               <TableCell>
//                 {new Date(booking.startTime).toLocaleString()}
//               </TableCell>
//               <TableCell>
//                 {new Date(booking.endTime).toLocaleString()}
//               </TableCell>
//               <TableCell>{booking.paymentAmount} ৳</TableCell>
//               <TableCell>
//                 <Badge
//                   className={
//                     booking.status === "PENDING"
//                       ? "bg-yellow-600"
//                       : booking.status === "CONFIRMED"
//                       ? "bg-green-600"
//                       : "bg-gray-600"
//                   }
//                 >
//                   {booking.status}
//                 </Badge>
//               </TableCell>
//               <TableCell>
//                 {booking.status === "PENDING" && booking.paymentId && (
//                   <form action={payNowAction}>
//                     <input
//                       type="hidden"
//                       name="paymentId"
//                       value={booking.paymentId}
//                     />
//                     <button
//                       type="submit"
//                       className="bg-[#1A80E3] text-white px-4 py-2 rounded"
//                     >
//                       Pay Now
//                     </button>
//                   </form>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }


"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { payNowAction } from "./PayButton";

interface Booking {
  id: string;
  itemName: string;
  userName: string;
  startTime: string;
  endTime: string;
  paymentAmount: number;
  status: string;
  paymentId: string | null;
}

interface Props {
  initialBookings: Booking[];
  error?: string | null;
}

export default function BookingsTable({ initialBookings, error }: Props) {
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [minAmount, setMinAmount] = useState<number | "">("");
  const [maxAmount, setMaxAmount] = useState<number | "">("");

  const filteredBookings = useMemo(() => {
    return initialBookings.filter((b) => {
      if (statusFilter !== "ALL" && b.status !== statusFilter) return false;
      if (minAmount !== "" && b.paymentAmount < minAmount) return false;
      if (maxAmount !== "" && b.paymentAmount > maxAmount) return false;
      return true;
    });
  }, [initialBookings, statusFilter, minAmount, maxAmount]);

  /* ---------- ERROR ---------- */
  if (error) {
    return (
      <div className="text-center py-10 text-red-600 font-medium bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  /* ---------- EMPTY ---------- */
  if (!initialBookings || initialBookings.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No bookings found.
      </div>
    );
  }

  return (
    <div>
      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded text-sm"
        >
          <option value="ALL">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>

        <input
          type="number"
          placeholder="Min Amount"
          value={minAmount}
          onChange={(e) =>
            setMinAmount(e.target.value ? Number(e.target.value) : "")
          }
          className="border p-2 rounded w-28 text-sm"
        />

        <input
          type="number"
          placeholder="Max Amount"
          value={maxAmount}
          onChange={(e) =>
            setMaxAmount(e.target.value ? Number(e.target.value) : "")
          }
          className="border p-2 rounded w-28 text-sm"
        />
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#1A80E3]">
              <TableHead className="text-white">Item</TableHead>
              <TableHead className="text-white">User</TableHead>
              <TableHead className="text-white">Start</TableHead>
              <TableHead className="text-white">End</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Payment</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredBookings.map((b) => (
              <TableRow key={b.id} className="hover:bg-blue-50">
                <TableCell>{b.itemName}</TableCell>
                <TableCell>{b.userName}</TableCell>
                <TableCell>
                  {new Date(b.startTime).toLocaleString()}
                </TableCell>
                <TableCell>
                  {new Date(b.endTime).toLocaleString()}
                </TableCell>
                <TableCell>{b.paymentAmount} ৳</TableCell>
                <TableCell>
                  <StatusBadge status={b.status} />
                </TableCell>
                <TableCell>
                  {b.status === "PENDING" && b.paymentId && (
                    <PayButton paymentId={b.paymentId} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="rounded-xl border shadow-sm p-4 space-y-3 bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{b.itemName}</p>
                <p className="text-sm text-gray-500">{b.userName}</p>
              </div>
              <StatusBadge status={b.status} />
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Start:</span>{" "}
                {new Date(b.startTime).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">End:</span>{" "}
                {new Date(b.endTime).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Amount:</span>{" "}
                {b.paymentAmount} ৳
              </p>
            </div>

            {b.status === "PENDING" && b.paymentId && (
              <PayButton paymentId={b.paymentId} full />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- REUSABLE ---------- */

function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      className={
        status === "PENDING"
          ? "bg-yellow-600"
          : status === "CONFIRMED"
          ? "bg-green-600"
          : "bg-gray-600"
      }
    >
      {status}
    </Badge>
  );
}

function PayButton({
  paymentId,
  full,
}: {
  paymentId: string;
  full?: boolean;
}) {
  return (
    <form action={payNowAction} className={full ? "pt-2" : ""}>
      <input type="hidden" name="paymentId" value={paymentId} />
      <button
        type="submit"
        className={`bg-[#1A80E3] text-white px-4 py-2 rounded ${
          full ? "w-full" : ""
        }`}
      >
        Pay Now
      </button>
    </form>
  );
}
