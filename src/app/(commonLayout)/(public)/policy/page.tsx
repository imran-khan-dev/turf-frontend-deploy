export const metadata = {
  title: "Policy - Turf Booking App",
  description:
    "Understand how we handle and protect the data of turf sports businesses using our booking platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A80E3] mb-4">
          Privacy Policy
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          How we handle and protect the data of turf sports businesses
        </p>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 space-y-10">
        {/* Data Collection */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data Collection</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect only the information necessary to manage turf bookings
            and profiles. This includes your name, contact information, turf
            details, field availability, pricing, and payment information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            No sensitive information beyond what is required for bookings is
            collected at this MVP stage.
          </p>
        </section>

        {/* Data Usage */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
          <p className="text-gray-700 leading-relaxed">Your data is used to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Manage bookings and reservations for your turf</li>
            <li>Display accurate turf information to potential customers</li>
            <li>Process online payments securely</li>
            <li>Provide support and communication when needed</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, rent, or share your data with third parties for
            marketing purposes. Your data is only shared internally when
            required to manage bookings or provide support.
          </p>
        </section>

        {/* Data Security */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>
        </section>

        {/* Data Retention */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            Your data is retained only for as long as necessary to provide the
            platform’s services and comply with legal obligations. Once no
            longer required, data will be securely deleted.
          </p>
        </section>

        {/* MVP Notice */}
        <section className="space-y-3 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="text-xl font-semibold text-[#1A80E3]">MVP Notice</h2>
          <p className="text-gray-700 leading-relaxed">
            This platform is currently in its MVP (Minimum Viable Product)
            stage. Features, policies, and workflows may change or improve based
            on real-world usage and feedback from turf sports businesses.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-3 text-center">
          <h2 className="text-2xl font-semibold">Questions?</h2>
          <p className="text-gray-700">
            For any privacy concerns or questions, please contact us through the
            support options available on the platform.
          </p>
        </section>
      </div>
    </div>
  );
}
