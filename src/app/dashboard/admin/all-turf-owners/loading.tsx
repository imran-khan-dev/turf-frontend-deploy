"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function OwnersTableLoading() {
  return (
    <div className="rounded-xl border border-[#1A80E3]/30 shadow-lg p-4 animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-4">
        <Skeleton className="h-6 w-56" />
      </div>

      {/* Desktop Table Skeleton */}
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
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="p-3">
                  <Skeleton className="h-4 w-24" />
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
      <div className="md:hidden space-y-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow bg-white space-y-2"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="space-y-1 text-sm">
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <Skeleton className="h-4 w-48" />
              </div>
              <div>
                <span className="font-semibold">Phone:</span>{" "}
                <Skeleton className="h-4 w-28" />
              </div>
              <div>
                <span className="font-semibold">Profile Slug:</span>{" "}
                <Skeleton className="h-4 w-32" />
              </div>
              <div>
                <span className="font-semibold">Created:</span>{" "}
                <Skeleton className="h-4 w-24" />
              </div>
              <div>
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
