export const metadata = {
  title: "How We Work - Turf Booking App",
  description:
    "Learn how our turf booking platform helps turf sports businesses manage bookings and receive confirmed reservations.",
};

export default function HowWeWorkPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A80E3] mb-4">
          How We Work
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          A simple and hassle-free way to discover turfs, check availability,
          and book your slot — all in one place.
        </p>
      </section>

      {/* Steps */}
      <section className="px-4 md:px-8 lg:px-16 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="text-3xl font-bold text-[#1A80E3] mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">Discover Turfs</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse turf profiles with images, location details, and field
              information. Each turf has its own dedicated page so you can
              explore before deciding.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="text-3xl font-bold text-[#1A80E3] mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">
              Check Fields & Availability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              View all available fields, prices per slot, and slot duration.
              Easily see which fields are available and which are already
              booked.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="text-3xl font-bold text-[#1A80E3] mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">Book Your Slot</h3>
            <p className="text-gray-600 leading-relaxed">
              Select a date, choose an available time slot, review your booking
              summary, and confirm — all within a smooth and guided flow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why This Works Better
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No phone calls. No confusion. No manual coordination. Everything is
            visual, transparent, and easy to understand — so you spend less time
            planning and more time playing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Clear Information</h4>
              <p className="text-gray-600 text-sm">
                See pricing, timing, and availability upfront.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Fast Booking</h4>
              <p className="text-gray-600 text-sm">
                Book your preferred slot in just a few clicks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Built for Players</h4>
              <p className="text-gray-600 text-sm">
                Designed with simplicity and real-world use in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 md:px-8 lg:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Simple. Clear. Reliable.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our MVP focuses on doing one thing really well — making turf booking
          easy for everyone. More features will come, but simplicity always
          stays.
        </p>
      </section>
    </div>
  );
}
