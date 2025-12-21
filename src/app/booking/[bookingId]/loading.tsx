"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function BookingPayInfoCardLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9] p-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-8 w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>

        {/* Booking Info */}
        <div className="space-y-4">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-5 w-40" />
        </div>

        <hr className="border-gray-200" />

        {/* Turf Info */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-48" />
          <div className="pl-6">
            <Skeleton className="h-4 w-64" />
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* User Info */}
        <div className="space-y-3">
          <Skeleton className="h-5 w-40" />
          <div className="pl-6">
            <Skeleton className="h-4 w-56" />
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Payment Summary */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-6 w-24" />
        </div>

        {/* Action Button */}
        <Skeleton className="h-12 w-40 mt-6" />
      </div>
    </div>
  );
}
