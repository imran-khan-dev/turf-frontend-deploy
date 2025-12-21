"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function TurfUsersTableLoading() {
  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-6 animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-7 w-60" />
      </div>

      {/* Desktop Table Skeleton */}
      <div className="hidden md:overflow-x-auto md:block">
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
              <tr
                key={rowIdx}
                className="border-b last:border-b-0 hover:bg-blue-50"
              >
                <td className="p-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                </td>
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
                  <Skeleton className="h-4 w-36" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-24" />
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
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
