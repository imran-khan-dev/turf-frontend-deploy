/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  profile: any;
}

export default function ContactSectionTurfVenue({ profile }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-white rounded-xl shadow-lg flex flex-col gap-3 border-l-4 border-[#1A80E3]">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <MapPin /> Address
          </h3>
          <p>{profile.address || "Address not available."}</p>
          {profile.googleMapLink && (
            <a href={profile.googleMapLink} target="_blank" className="text-[#1A80E3] hover:underline">
              View on Google Maps
            </a>
          )}
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-white rounded-xl shadow-lg flex flex-col gap-3 border-l-4 border-[#1A80E3]">
          {profile.phone && (
            <p className="flex items-center gap-2">
              <Phone />{" "}
              <a href={`tel:${profile.phone}`} className="text-[#1A80E3] hover:underline">
                {profile.phone}
              </a>
            </p>
          )}
          {profile.email && (
            <p className="flex items-center gap-2">
              <Mail />{" "}
              <a href={`mailto:${profile.email}`} className="text-[#1A80E3] hover:underline">
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
  );
}
