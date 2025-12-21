export default function BookingNotFound() {
  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Booking not found
        </h1>
        <p className="text-gray-600 mt-2">
          The booking may have expired, been removed, or the link is invalid.
        </p>
      </div>
    </div>
  );
}
