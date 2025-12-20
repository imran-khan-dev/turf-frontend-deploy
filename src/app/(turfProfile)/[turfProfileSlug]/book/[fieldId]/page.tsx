/* eslint-disable @typescript-eslint/no-explicit-any */

import serverFetch from "@/lib/server-fetch";
import { getCookie } from "@/services/auth/tokenHandlers";
import { redirect } from "next/navigation";
import BookingClient from "../../../../../components/modules/TurfProfilePublicPage/Booking/BookingClient";

interface BookingPageProps {
  params: { turfProfileSlug: string; fieldId: string };
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { turfProfileSlug, fieldId } = await params;

  let turfProfile: any | null = null;
  let turfUser: any | null = null;

  //  Check for user token
  const accessToken = await getCookie("turfUserAccess");
  if (!accessToken) {
    const redirectAfterLogin = encodeURIComponent(
      `/${turfProfileSlug}/book/${fieldId}`
    );
    const loginPath = `/${turfProfileSlug}/turf-user/login?redirect=${redirectAfterLogin}`;
    redirect(loginPath);
  }

  // Fetch field data from server
  const fieldRes = await serverFetch.get(`turf-field/get-field/${fieldId}`);
  if (!fieldRes.ok) return <div className="p-8">Field not found</div>;

  const fieldJson = await fieldRes.json();
  const field = fieldJson.data;

  // Fetch turf profile data from server
  const res = await serverFetch.get(
    `turf-profile/get-turf-profile/${turfProfileSlug}`
  );

  if (!res.ok) return <div className="p-8">Turf Profile not found</div>;

  const json = await res.json();
  turfProfile = json.data;

  // Fetch user session data
  const sessionRes = await serverFetch.get(
    `auth/turf-user-session?turfProfileId=${turfProfile.id}`,
    {},
    "turfUserAccess"
  );

  if (!sessionRes.ok)
    return <div className="p-8">Error fetching user session</div>;

  const sessionData = await sessionRes.json();
  turfUser = sessionData.data?.isAuthenticated ? sessionData.data.user : null;

  return (
    <div>
      <BookingClient field={field} turfProfile={turfProfile} user={turfUser} />
    </div>
  );
}
