"use client";

import { useEffect } from "react";

export default function BookingError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Booking page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="text-gray-600 mt-2">
          We couldn’t load your booking right now. Please try again later.
        </p>

        <button
          onClick={reset}
          className="mt-6 px-6 py-2 rounded-lg bg-[#1A80E3] text-white hover:bg-blue-700 cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
