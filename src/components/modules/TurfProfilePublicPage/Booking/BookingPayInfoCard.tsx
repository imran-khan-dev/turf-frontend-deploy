/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, CreditCard, MapPin, User } from "lucide-react";
import { format } from "date-fns";

export default function BookingPayInfoCard({
  booking,
  turfProfile,
  user,
  onPayNow,
}: {
  booking: any;
  turfProfile: any;
  user: any;
  onPayNow: () => Promise<void>;
}) {
  const isPending = booking.paymentStatus === "PENDING";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold text-[#1A80E3]">
            Booking #{booking.id}
          </h1>
          <p className="text-sm text-gray-500">Review your booking details</p>
        </div>

        <span
          className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full
    ${
      isPending
        ? "bg-yellow-100 text-yellow-700"
        : "bg-green-100 text-green-700"
    }`}
          style={{ height: "1.5rem" }}
        >
          {booking.paymentStatus}
        </span>
      </div>

      {/* Booking Info */}
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-[#1A80E3]" />
          <span>
            <strong>Start:</strong>{" "}
            {format(new Date(booking.startTime), "dd MMM yyyy · hh:mm a")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#1A80E3]" />
          <span>
            <strong>Start:</strong>{" "}
            {format(new Date(booking.startTime), "dd MMM yyyy · hh:mm a")}
          </span>
        </div>
      </div>

      <hr />

      {/* Turf Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-[#1A80E3]" />
          <span>
            <strong>Turf:</strong> {turfProfile.name}
          </span>
        </div>

        {turfProfile.address && (
          <p className="text-gray-500 text-xs pl-6">{turfProfile.address}</p>
        )}
      </div>

      <hr />

      {/* User Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <User size={16} className="text-[#1A80E3]" />
          <span>
            <strong>User:</strong> {user.name}
          </span>
        </div>
        <p className="text-gray-500 text-xs pl-6">{user.email}</p>
      </div>

      <hr />

      {/* Payment Summary */}
      <div className="flex items-center justify-between text-lg font-bold">
        <div className="flex items-center gap-2">
          <CreditCard size={18} className="text-[#1A80E3]" />
          <span>Total Amount</span>
        </div>
        <span>{booking.paymentAmount} ৳</span>
      </div>

      {/* Action */}
      {booking.paymentStatus === "PENDING" && (
        <form
          action={onPayNow}
          className="pt-2 flex justify-stretch md:justify-end"
        >
          <Button
            className="
        bg-[#1A80E3] hover:bg-blue-700
        w-full md:w-auto
        px-6 h-11
        text-base font-semibold
      "
          >
            Pay Now
          </Button>
        </form>
      )}
    </div>
  );
}
