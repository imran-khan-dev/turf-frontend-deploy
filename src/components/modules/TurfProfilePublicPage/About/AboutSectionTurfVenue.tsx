/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutSectionProps {
  profile: any;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white">
         <h2 className="text-4xl font-bold text-center text-[#1A80E3] mb-12">
            About Us
          </h2>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12">
        {profile.aboutImg && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden shadow-xl"
          >
            <Image src={profile.aboutImg} alt="About Turf" fill className="object-cover rounded-xl" />
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
  );
}
