/* eslint-disable @typescript-eslint/no-explicit-any */
import BookingClient from "@/components/modules/TurfProfilePublicPage/Booking/BookingClient";
import serverFetch from "@/lib/server-fetch";
import { getCookie } from "@/services/auth/tokenHandlers";
import { redirect } from "next/navigation";

interface BookingPageProps {
  params: { turfProfileSlug: string; fieldId: string };
}

export async function generateMetadata({ params }: BookingPageProps) {
  const { turfProfileSlug, fieldId } = await params;

  try {
    const turfRes = await serverFetch.get(
      `turf-profile/get-turf-profile/${turfProfileSlug}`
    );
    if (!turfRes.ok) throw new Error("Turf Profile not found");
    const turfJson = await turfRes.json();
    const turfProfile = turfJson.data;

    const fieldRes = await serverFetch.get(`turf-field/get-field/${fieldId}`);
    if (!fieldRes.ok) throw new Error("Field not found");
    const fieldJson = await fieldRes.json();
    const field = fieldJson.data;

    const title = `Book ${field.name} at ${turfProfile.name}`;
    const description = `Book your slot for ${field.name} at ${turfProfile.name}. Check availability, pricing, and schedule your game easily.`;

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
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return { title: "Booking Page" };
  }
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { turfProfileSlug, fieldId } = await params;

  let field: any = null;
  let turfProfile: any = null;
  let turfUser: any = null;
  let error: string | null = null;

  const accessToken = await getCookie("turfUserAccess");
  if (!accessToken) {
    const redirectAfterLogin = encodeURIComponent(
      `/${turfProfileSlug}/book/${fieldId}`
    );
    redirect(
      `/${turfProfileSlug}/turf-user/login?redirect=${redirectAfterLogin}`
    );
  }

  try {
    // Fetch field
    const fieldRes = await serverFetch.get(`turf-field/get-field/${fieldId}`);
    if (!fieldRes.ok) throw new Error("Field not found");
    const fieldJson = await fieldRes.json();
    field = fieldJson.data;

    // Fetch turf profile
    const turfRes = await serverFetch.get(
      `turf-profile/get-turf-profile/${turfProfileSlug}`
    );
    if (!turfRes.ok) throw new Error("Turf Profile not found");
    const turfJson = await turfRes.json();
    turfProfile = turfJson.data;

    // Fetch user session
    const sessionRes = await serverFetch.get(
      `auth/turf-user-session?turfProfileId=${turfProfile.id}`,
      {},
      "turfUserAccess"
    );
    if (!sessionRes.ok) throw new Error("Error fetching user session");
    const sessionData = await sessionRes.json();
    turfUser = sessionData.data?.isAuthenticated ? sessionData.data.user : null;
  } catch (err: any) {
    console.error(err);
    error =
      err?.message || "Something went wrong while loading booking page data.";
  }

  return (
    <div>
      <BookingClient
        field={field}
        turfProfile={turfProfile}
        user={turfUser}
        error={error}
      />
    </div>
  );
}
