

export const metadata = {
  title: "Manage Bookings - Turf Booking App",
  description: "Track, manage, and update turf bookings efficiently. Keep your turf schedule organized and avoid double bookings.",
};

export default function ManageBookingsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A80E3] mb-4">
          Manage Bookings
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          Keep track of all reservations, see upcoming bookings, and stay
          organized with ease.
        </p>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 lg:px-16 py-16 max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#1A80E3]">
          Why Manage Bookings Online?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Managing your turf bookings manually can be time-consuming and prone
          to mistakes. Our platform centralizes all your reservations in one
          dashboard, so you can view, update, or cancel bookings efficiently.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Track all reservations in real-time</li>
          <li>Prevent double bookings and scheduling conflicts</li>
          <li>Receive instant notifications when customers book a slot</li>
          <li>Quickly update availability and pricing for fields</li>
        </ul>
      </section>
    </div>
  );
}
