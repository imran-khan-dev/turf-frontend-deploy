"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, DollarSign, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentCancelContent = () => {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const turfProfileSlug = searchParams.get("turfProfileSlug");

  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooking() {
      if (!bookingId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}booking/get-booking/${bookingId}`,
          { cache: "no-store" }
        );
        const json = await res.json();

        if (json.success) setBooking(json.data);
      } catch (err) {
        console.error("Failed to fetch booking:", err);
      }

      setLoading(false);
    }

    fetchBooking();
  }, [bookingId]);

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <XCircle size={34} className="text-red-500 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A80E3] break-words">
                Payment Cancelled
              </h1>
              <p className="text-gray-600">Your payment was not completed</p>
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-4 shadow-inner">
          {loading && (
            <p className="text-gray-500">Loading booking details...</p>
          )}

          {!loading && booking && (
            <>
              <h2 className="font-semibold text-lg">Booking Summary</h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Field:</span>{" "}
                  {booking?.turfField?.name || "Unknown"}
                </p>

                <p className="flex items-center gap-1">
                  <DollarSign size={16} className="text-[#1A80E3]" />
                  <span className="font-medium">0 BDT</span>
                </p>

                <p className="flex items-center gap-1">
                  <CalendarDays size={16} className="text-[#1A80E3]" />
                  <span>
                    {new Date(booking.startTime).toLocaleString("en-GB", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </p>

                <p>
                  <span className="font-medium">Status:</span> Pending
                </p>
              </div>
            </>
          )}

          {!loading && !booking && (
            <p className="text-gray-500">No booking data available.</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={`/${turfProfileSlug || "/"}`}>
            <Button className="w-full sm:w-auto px-6 py-2 bg-[#1A80E3] hover:bg-blue-700 cursor-pointer">
              Back to Home
            </Button>
          </Link>

          <Link
            href={`${
              turfProfileSlug ? `/${turfProfileSlug}/user-dashboard` : "/"
            }`}
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-2 cursor-pointer"
            >
              My Bookings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelContent;
