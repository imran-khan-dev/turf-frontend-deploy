/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  DollarSign,
  Clock,
} from "lucide-react";

interface TurfField {
  id: string;
  name: string;
  pricePerSlot: number;
  slotDuration: number;
  available: boolean;
  openHour?: string;
  closeHour?: string;
  photos?: string[];
}

interface TurfProfile {
  id: string;
  name?: string;
  slug?: string;
  phone?: string;
  email?: string;
  whatsappLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  logo?: string;
  heroImage?: string;
  aboutTitle?: string;
  aboutDesc?: string;
  aboutImg?: string;
  turfFields?: TurfField[];
  address?: string;
  googleMapLink?: string;
}

interface TurfProfileProps {
  profile: TurfProfile;
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
  const handleBookField = (field: TurfField) =>
    router.push(`/${profile.slug}/book/${field.id}`);

  return (
    <div className="font-sans w-full">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px]">
        {profile.heroImage && (
          <Image
            src={profile.heroImage}
            alt={profile.name || "Turf Venue"}
            fill
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
          {profile.logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-28 h-28 md:w-32 md:h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <Image
                src={profile.logo}
                alt="Turf Logo"
                width={128}
                height={128}
                className="object-cover"
              />
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-lg"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/90 text-base md:text-lg mb-6 drop-shadow-md"
          >
            {profile.address}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Button
              onClick={scrollToFields}
              className="bg-[#1A80E3] hover:bg-blue-700 text-white shadow-lg"
            >
              View Fields
            </Button>
            <Link
              href={profile.slug ? `/${profile.slug}/turf-user/login` : "#"}
            >
              <Button className="bg-white text-[#1A80E3] hover:bg-gray-100 shadow-lg">
                {turfUser ? "My Bookings" : "Login"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

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

      {/* Turf Fields */}
      <section id="turf-fields" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-center text-[#1A80E3] mb-12">
            Our Fields
          </h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {(profile.turfFields || []).map((field) => (
              <SwiperSlide key={field.id} className="pb-5">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-visible"
                >
                  {(field.photos ?? []).length > 0 ? (
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={5}
                      slidesPerView={1}
                      className="h-64 w-full"
                    >
                      {(field.photos ?? []).map((photo, idx) => (
                        <SwiperSlide key={idx}>
                          <Image
                            src={photo}
                            alt={field.name}
                            fill
                            className="object-cover rounded-t-2xl"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="h-64 w-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-2xl">
                      No Image
                    </div>
                  )}

                  <div className="p-6 pb-10 flex flex-col gap-2 relative">
                    <h3 className="text-xl font-semibold">{field.name}</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#1A80E3]" />
                      {field.pricePerSlot} BDT
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1A80E3]" />
                      {field.slotDuration} min
                    </p>
                    {field.openHour && field.closeHour && (
                      <p className="text-gray-500 text-sm">
                        Open: {field.openHour} - {field.closeHour}
                      </p>
                    )}
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                        field.available
                          ? "bg-green-100 text-green-800 animate-pulse"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {field.available ? "Available" : "Booked"}
                    </span>
                    <Button
                      disabled={!field.available}
                      onClick={() => handleBookField(field)}
                      className={`mt-4 w-full ${
                        field.available
                          ? "bg-[#1A80E3] hover:bg-blue-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {field.available ? "Book Now" : "Unavailable"}
                    </Button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12">
          {profile.aboutImg && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={profile.aboutImg}
                alt="About Turf"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
          >
            <div className="bg-[#F1F5F9] p-6 rounded-xl shadow-lg relative before:absolute before:-top-6 before:-left-6 before:w-20 before:h-20 before:bg-[#1A80E3]/20 before:rounded-full">
              <h2 className="text-3xl font-bold text-[#1A80E3]">
                {profile.aboutTitle || "About Our Turf"}
              </h2>
              <p className="text-gray-700">
                {profile.aboutDesc || "No description available."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col gap-3 border-l-4 border-[#1A80E3]"
          >
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <MapPin /> Address
            </h3>
            <p>{profile.address || "Address not available."}</p>
            {profile.googleMapLink && (
              <a
                href={profile.googleMapLink}
                target="_blank"
                className="text-[#1A80E3] hover:underline"
              >
                View on Google Maps
              </a>
            )}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col gap-3 border-l-4 border-[#1A80E3]"
          >
            {profile.phone && (
              <p className="flex items-center gap-2">
                <Phone />{" "}
                <a
                  href={`tel:${profile.phone}`}
                  className="text-[#1A80E3] hover:underline"
                >
                  {profile.phone}
                </a>
              </p>
            )}
            {profile.email && (
              <p className="flex items-center gap-2">
                <Mail />{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[#1A80E3] hover:underline"
                >
                  {profile.email}
                </a>
              </p>
            )}
            <div className="flex items-center gap-4 mt-2">
              {profile.facebookLink && (
                <a href={profile.facebookLink} target="_blank">
                  <Facebook className="text-[#1A80E3]" />
                </a>
              )}
              {profile.instagramLink && (
                <a href={profile.instagramLink} target="_blank">
                  <Instagram className="text-[#1A80E3]" />
                </a>
              )}
              {profile.whatsappLink && (
                <a href={profile.whatsappLink} target="_blank">
                  <MessageCircle className="text-[#1A80E3]" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t text-center text-sm text-gray-700">
        &copy; {new Date().getFullYear()} Turf Booking App. All Rights Reserved.
      </footer>
    </div>
  );
}
