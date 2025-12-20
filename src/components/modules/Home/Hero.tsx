"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroProps } from "@/types/heroProps";
import { SparkleIcon } from "@/assets/icons/SparkleIcon";

export function Hero({
  badge = {
    text: "Professional Turf Management Platform",
  },
  heading = {
    line1: "Manage Your Turf Bookings",
    line2: "Effortlessly and Professionally",
  },
  description = [
    "A powerful platform for turf sports businesses to manage bookings,",
    "track customers, and grow their turf operations online.",
  ],
  features = [
    "Built for Turf Sports Businesses",
    "Centralized Booking Management",
    "Secure bKash Payments",
  ],
}: HeroProps & { features?: string[] }) {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/turf-field.jpg"
          alt="Turf Field"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-5"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-white px-3 py-1 transition hover:shadow-sm">
                <SparkleIcon />
                <span className="text-xs font-medium text-blue-700">
                  {badge.text}
                </span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {heading.line1}
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {heading.line2}
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base md:text-lg max-w-lg">
                {description.join(" ")}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/owner/register"
                  className="bg-[#0C78E1] text-white rounded-xl px-8 py-3 font-medium
                             transition-all duration-300
                             hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg
                             active:scale-95 text-center"
                >
                  Start for Free
                </Link>

                <Link
                  href="#about"
                  className="self-center text-white text-lg font-medium
                             underline-offset-4 hover:underline transition"
                >
                  Learn More
                </Link>
              </div>

              {/* Features / Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 hover:bg-white/20"
                  >
                    {/* <CheckIcon className="w-6 h-6 text-green-400 flex-shrink-0" /> */}
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column (intentionally empty for minimal design) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
