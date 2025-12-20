/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  profile: any;
  turfUser?: any;
  scrollToFields: () => void;
}

export default function HeroSection({
  profile,
  turfUser,
  scrollToFields,
}: HeroSectionProps) {
  return (
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
            className="bg-[#1A80E3] hover:bg-blue-700 text-white shadow-lg cursor-pointer"
          >
            View Fields
          </Button>
          <Link href={profile.slug ? `/${profile.slug}/turf-user/login` : "#"}>
            <Button className="bg-white text-[#1A80E3] hover:bg-gray-100 shadow-lg cursor-pointer">
              {turfUser ? "My Bookings" : "Login"}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
