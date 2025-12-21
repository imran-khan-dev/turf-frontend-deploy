"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function BookingPageLoading() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT - Field Info Skeleton */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-1/3" />
          </div>

          {/* Date picker skeleton */}
          <div className="bg-white rounded-xl shadow p-6">
            <Skeleton className="h-10 w-64 mb-4" />
          </div>

          {/* Slots skeleton */}
          <div className="bg-white rounded-xl shadow p-6">
            <Skeleton className="h-6 w-32 mb-3" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-10 rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - Booking Summary Skeleton */}
        <div className="bg-white rounded-xl shadow p-6 h-fit space-y-3">
          <Skeleton className="h-6 w-1/2" />
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
          <Skeleton className="h-10 w-full mt-4" />
        </div>
      </div>
    </div>
  );
}
