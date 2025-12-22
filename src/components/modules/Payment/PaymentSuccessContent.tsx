"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import { CalendarDays, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const paymentId = searchParams.get("paymentId"); // fixed casing
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
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/get-booking/${bookingId}`,
          { cache: "no-store" }
        );
        const json = await res.json();

        if (json.success) setBooking(json.data);
      } catch (err) {
        console.error("Failed to fetch booking:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBooking();
  }, [bookingId]);

  const isPending = booking?.paymentStatus === "PENDING";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9]">
        <p className="text-gray-500 text-lg">Loading booking details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Success Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <CheckCircle size={32} className="text-green-500 flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1A80E3] break-words">
                Payment Successful!
              </h1>
              <p className="text-gray-600 text-base sm:text-sm">
                Your booking has been confirmed
              </p>
            </div>
          </div>

          <span
            className={`shrink-0 px-3 py-1.5 text-sm font-semibold rounded-full ${
              isPending
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {booking?.paymentStatus || "UNKNOWN"}
          </span>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-4 shadow-inner">
          {paymentId && (
            <p className="text-gray-500 text-sm">
              Payment ID: <span className="font-medium">{paymentId}</span>
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Field:</span>{" "}
                {booking?.turfField?.name || "N/A"}
              </p>
              <p className="text-gray-700 flex items-center gap-1">
                <DollarSign size={16} className="text-[#1A80E3]" />
                <span className="font-medium">
                  {booking?.paymentAmount ?? "N/A"} BDT
                </span>
              </p>
              <p className="text-gray-700 flex items-center gap-1">
                <CalendarDays size={16} className="text-[#1A80E3]" />
                <span>
                  {booking?.startTime
                    ? new Date(booking.startTime).toLocaleString("en-GB", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "N/A"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link href={`/${turfProfileSlug ?? ""}`}>
            <Button className="w-full sm:w-auto py-2 px-6 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-50">
              Back to Home
            </Button>
          </Link>

          <Link href={`/${turfProfileSlug ?? ""}/user-dashboard`}>
            <Button className="w-full sm:w-auto py-2 px-6 rounded-lg bg-[#1A80E3] text-white hover:bg-blue-700">
              My Bookings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
