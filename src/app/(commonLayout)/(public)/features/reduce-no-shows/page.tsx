export const metadata = {
  title: "Reduce No-Shows - Turf Booking App",
  description:
    "Minimize missed bookings and improve turf utilization by ensuring customers confirm reservations through online payments.",
};

export default function ReduceNoShowsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A80E3] mb-4">
          Reduce No-Shows
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          Ensure your turf slots are utilized efficiently by encouraging
          customers to confirm their bookings online.
        </p>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 lg:px-16 py-16 max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#1A80E3]">
          How We Help Reduce No-Shows
        </h2>
        <p className="text-gray-700 leading-relaxed">
          No-shows can lead to lost revenue and wasted turf slots. By requiring
          online payments for booking confirmation, your turf business ensures
          that reservations are genuine. You also get instant visibility of
          confirmed bookings so you can plan accordingly.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Only confirmed, paid bookings appear on your dashboard</li>
          <li>
            Minimize lost revenue due to cancellations or missed appointments
          </li>
          <li>Provide clear communication to customers about their bookings</li>
          <li>
            Boost efficiency and customer satisfaction by keeping slots reserved
            only for serious customers
          </li>
        </ul>
      </section>
    </div>
  );
}
