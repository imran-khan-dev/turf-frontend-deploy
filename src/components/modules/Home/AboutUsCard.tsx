"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            About Our Platform
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            Our platform makes managing turf bookings effortless and efficient. Whether you manage a single turf or multiple facilities, you can handle schedules, reservations, and payments all from one simple, intuitive platform.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            Customers can book turf slots quickly and easily, while administrators have full control over availability, scheduling, and transactions — all through a seamless, user-friendly interface.
          </p>


          {/* Call to Action */}
          <div className="flex gap-4 pt-6 flex-wrap">
            <Link
              href="/about-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition hover:bg-blue-700 hover:-translate-y-0.5 shadow-md"
            >
              Learn More
            </Link>
            <Link
              href="/contact-us"
              className="text-blue-600 font-medium border border-blue-600 px-6 py-3 rounded-lg transition hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 w-full h-80 md:h-[28rem] relative rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
        >
          <Image
            src="/turf-field-4.jpg"
            alt="Turf Management Illustration"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
