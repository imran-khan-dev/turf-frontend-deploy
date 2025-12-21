"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function BookingsTableLoading() {
  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4 space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
      </div>

      {/* ================= MOBILE SKELETON ================= */}
      <div className="space-y-4 md:hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 space-y-3 shadow-sm"
          >
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />

            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>

            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE SKELETON ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A80E3]">
              {Array.from({ length: 7 }).map((_, i) => (
                <th key={i} className="p-3">
                  <Skeleton className="h-5 w-24 bg-blue-300/40" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, rowIdx) => (
              <tr key={rowIdx} className="border-b">
                {Array.from({ length: 7 }).map((_, colIdx) => (
                  <td key={colIdx} className="p-3">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
