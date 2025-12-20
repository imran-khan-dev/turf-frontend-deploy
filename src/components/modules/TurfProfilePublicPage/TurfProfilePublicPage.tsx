/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import FooterSectionTurfVenue from "./Footer/FooterSectionTurfVenue";
import ContactSectionTurfVenue from "./Contact/ContactSectionTurfVenue";
import AboutSectionTurfVenue from "./About/AboutSectionTurfVenue";
import HeroSection from "./Hero/HeroSectionTurfVenue";
import FieldsSectionTurfVenue from "./TurfField/FieldSectionTurfVenue";

interface TurfProfileProps {
  profile: any;
  turfUser?: any;
}

export default function TurfProfilePublicPage({
  profile,
  turfUser,
}: TurfProfileProps) {
  const router = useRouter();
  const scrollToFields = () =>
    document
      .getElementById("turf-fields")
      ?.scrollIntoView({ behavior: "smooth" });
  const handleBookField = (field: any) =>
    router.push(`/${profile.slug}/book/${field.id}`);

  return (
    <div className="font-sans w-full">
      <HeroSection
        profile={profile}
        turfUser={turfUser}
        scrollToFields={scrollToFields}
      />

      {/* Side Navigation */}
      <aside className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-3">
        {[
          { id: "turf-fields", label: "Fields" },
          { id: "about", label: "About" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A80E3] text-white font-medium hover:scale-105 transition-transform shadow-md"
          >
            {item.label}
          </a>
        ))}
      </aside>

      <FieldsSectionTurfVenue
        profile={profile}
        handleBookField={handleBookField}
      />
      <AboutSectionTurfVenue profile={profile} />
      <ContactSectionTurfVenue profile={profile} />
      <FooterSectionTurfVenue profile={profile} />
    </div>
  );
}
