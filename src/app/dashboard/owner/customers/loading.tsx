"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CustomersLoading() {
  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4 animate-pulse">
      {/* Title */}
      <div className="mb-6">
        <Skeleton className="h-7 w-64" />
      </div>

      {/* Desktop Table Skeleton */}
      <div className="hidden md:overflow-x-auto md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A80E3]">
              {Array.from({ length: 5 }).map((_, i) => (
                <th key={i} className="p-3">
                  <Skeleton className="h-5 w-24 bg-blue-300/40" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-3">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-48" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-28" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Skeleton */}
      <div className="space-y-4 md:hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 shadow bg-white space-y-2"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="space-y-1 text-sm">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
