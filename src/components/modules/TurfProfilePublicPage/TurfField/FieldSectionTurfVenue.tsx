/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

interface TurfFieldsSectionProps {
  profile: any;
  handleBookField: (field: any) => void;
}

export default function FieldsSectionTurfVenue({
  profile,
  handleBookField,
}: TurfFieldsSectionProps) {
  return (
    <section id="turf-fields" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-[#1A80E3] mb-12">
          Our Fields
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="pb-12"
        >
          {(profile.turfFields || []).map((field: any) => (
            <SwiperSlide key={field.id}>
              <div className="pb-10">
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
                      {(field.photos ?? []).map(
                        (
                          photo: string | StaticImport,
                          idx: Key | null | undefined
                        ) => (
                          <SwiperSlide key={idx}>
                            <Image
                              src={photo}
                              alt={field.name}
                              fill
                              className="object-cover rounded-t-2xl"
                            />
                          </SwiperSlide>
                        )
                      )}
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
                      className={`mt-4 w-full cursor-pointer ${
                        field.available
                          ? "bg-[#1A80E3] hover:bg-blue-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {field.available ? "Book Now" : "Unavailable"}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
