import serverFetch from "@/lib/server-fetch";
import { notFound, redirect } from "next/navigation";
import HeroSection from "@/components/modules/TurfProfilePublicPage/Hero/HeroSectionTurfVenue";
import ContactSectionTurfVenue from "@/components/modules/TurfProfilePublicPage/Contact/ContactSectionTurfVenue";
import FooterSectionTurfVenue from "@/components/modules/TurfProfilePublicPage/Footer/FooterSectionTurfVenue";
import BookingPayInfoCard from "../../../components/modules/TurfProfilePublicPage/Booking/BookingPayInfoCard";

interface BookingPageProps {
  params: { bookingId: string };
}

export async function generateMetadata({ params }: BookingPageProps) {
  const { bookingId } = await params;

  try {
    const res = await serverFetch.get(`booking/get-booking/${bookingId}`);
    if (!res.ok) throw new Error("Booking not found");
    const { data: booking } = await res.json();

    const profileRes = await serverFetch.get(
      `turf-profile/get-turf-profile/id/${booking.turfProfileId}`
    );
    if (!profileRes.ok) throw new Error("Turf profile not found");
    const { data: turfProfile } = await profileRes.json();

    const title = `Booking #${booking.id} - ${turfProfile.name}`;
    const description = `View booking details for ${turfProfile.name}, including slot, field, and payment info.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: turfProfile.heroImage
          ? [{ url: turfProfile.heroImage, width: 1200, height: 630 }]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return { title: "Booking Page" };
  }
}

// Server Action
async function createPayment(paymentId: string) {
  "use server";

  const body = JSON.stringify({ paymentId });
  const res = await serverFetch.post(
    `payment/make-payment`,
    { body, headers: { "Content-Type": "application/json" } },
    "turfUserAccess"
  );

  const json = await res.json();
  return json.url;
}

export default async function BookingPage({
  params,
}: {
  params: { bookingId: string };
}) {
  const { bookingId } = await params;

  const res = await serverFetch.get(`booking/get-booking/${bookingId}`);

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("BOOKING_FETCH_FAILED");

  const { data: booking } = await res.json();

  const turfProfileId = booking.turfProfileId;
  const turfUser = booking.turfUser;

  // Fetch turf profile data
  const profileRes = await serverFetch.get(
    `turf-profile/get-turf-profile/id/${turfProfileId}`
  );
  if (profileRes.status === 404) notFound();
  if (!profileRes.ok) throw new Error("TURF_PROFILE_FETCH_FAILED");

  const { data: turfProfile } = await profileRes.json();

  // server action bound with booking context
  const payNowAction = async () => {
    "use server";
    const url = await createPayment(booking.payment.id);
    redirect(url);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* Hero */}
      <HeroSection
        profile={turfProfile}
        turfUser={turfUser}
        scrollToFields={undefined}
      />

      {/* Booking Info */}
      <section id="booking" className="py-24 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-4xl mx-auto">
          <BookingPayInfoCard
            booking={booking}
            turfProfile={turfProfile}
            user={turfUser}
            onPayNow={payNowAction}
          />
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100">
        <ContactSectionTurfVenue profile={turfProfile} />
      </section>

      <FooterSectionTurfVenue profile={turfProfile} />
    </div>
  );
}
