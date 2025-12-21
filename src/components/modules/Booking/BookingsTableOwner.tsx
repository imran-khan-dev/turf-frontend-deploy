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

export default function BookingsTableOwner({ initialBookings, error }: Props) {
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

  /* ---------------- ERROR ---------------- */
  if (error) {
    return (
      <div className="text-center py-10 text-red-600 font-medium bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  /* ---------------- EMPTY ---------------- */
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
      <div className="mb-4 flex flex-wrap gap-3 items-center">
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
          placeholder="Min ৳"
          value={minAmount}
          onChange={(e) =>
            setMinAmount(e.target.value ? Number(e.target.value) : "")
          }
          className="border p-2 rounded w-24 text-sm"
        />

        <input
          type="number"
          placeholder="Max ৳"
          value={maxAmount}
          onChange={(e) =>
            setMaxAmount(e.target.value ? Number(e.target.value) : "")
          }
          className="border p-2 rounded w-24 text-sm"
        />
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-4 md:hidden">
        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="rounded-xl border shadow-sm p-4 bg-white space-y-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{b.itemName}</p>
                <p className="text-sm text-gray-500">{b.userName}</p>
              </div>

              <Badge
                className={
                  b.status === "PENDING"
                    ? "bg-yellow-600"
                    : b.status === "CONFIRMED"
                    ? "bg-green-600"
                    : "bg-gray-600"
                }
              >
                {b.status}
              </Badge>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                <strong>Start:</strong> {new Date(b.startTime).toLocaleString()}
              </p>
              <p>
                <strong>End:</strong> {new Date(b.endTime).toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-semibold">{b.paymentAmount} ৳</span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">
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
            {filteredBookings.map((b) => (
              <TableRow key={b.id} className="hover:bg-blue-50 transition">
                <TableCell>{b.itemName}</TableCell>
                <TableCell>{b.userName}</TableCell>
                <TableCell>{new Date(b.startTime).toLocaleString()}</TableCell>
                <TableCell>{new Date(b.endTime).toLocaleString()}</TableCell>
                <TableCell>{b.paymentAmount} ৳</TableCell>
                <TableCell>
                  <Badge
                    className={
                      b.status === "PENDING"
                        ? "bg-yellow-600"
                        : b.status === "CONFIRMED"
                        ? "bg-green-600"
                        : "bg-gray-600"
                    }
                  >
                    {b.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
