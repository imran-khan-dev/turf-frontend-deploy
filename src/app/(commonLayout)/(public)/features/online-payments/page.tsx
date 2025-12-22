export const metadata = {
  title: "Accept Online Payments - Turf Booking App",
  description: "Receive confirmed bookings instantly by accepting online payments via bKash for your turf sports business.",
};


export default function OnlinePaymentsPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A80E3] mb-4">
          Accept Payments Online
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          Secure, convenient online payment system to confirm bookings and reduce payment hassles.
        </p>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 lg:px-16 py-16 max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#1A80E3]">How Online Payments Help Your Turf Business</h2>
        <p className="text-gray-700 leading-relaxed">
          By accepting payments online, you ensure that every booking is genuine and confirmed. Customers pay securely using supported payment methods (currently bKash), which minimizes no-shows and guarantees revenue.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Confirm bookings instantly after successful payment</li>
          <li>Reduce administrative work and manual payment tracking</li>
          <li>Build trust with customers through secure transactions</li>
          <li>Access all payment records directly from your dashboard</li>
        </ul>
      </section>
    </div>
  );
}
