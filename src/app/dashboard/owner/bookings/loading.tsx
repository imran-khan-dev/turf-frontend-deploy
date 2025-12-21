"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function BookingsOwnerLoading() {
  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4 sm:p-6">
      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-3 items-center">
        <Skeleton className="h-8 w-36 rounded" />
        <Skeleton className="h-8 w-24 rounded" />
        <Skeleton className="h-8 w-24 rounded" />
      </div>

      {/* ================= MOBILE SKELETON ================= */}
      <div className="space-y-4 md:hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-4 space-y-3 shadow-sm">
            <Skeleton className="h-5 w-3/4" /> {/* Item */}
            <Skeleton className="h-4 w-1/2" /> {/* User */}
            <div className="flex gap-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-4 w-20" /> {/* Amount */}
              <Skeleton className="h-6 w-24 rounded-full" /> {/* Status */}
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE SKELETON ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A80E3]">
              {Array.from({ length: 6 }).map((_, i) => (
                <th key={i} className="p-3">
                  <Skeleton className="h-5 w-24 bg-blue-300/40" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, rowIdx) => (
              <tr key={rowIdx} className="border-b">
                <td className="p-3">
                  <Skeleton className="h-4 w-40" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-44" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-44" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-6 w-24 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
