// import { Mail, Phone, MapPin } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import React from 'react';

// const contactItems = [
//   {
//     title: 'Email Us',
//     description: 'support@turfbooking.com',
//     icon: Mail,
//     bgColor: 'bg-blue-50',
//     iconColor: 'text-blue-500',
//   },
//   {
//     title: 'Call Us',
//     description: '+880 1234 567890',
//     icon: Phone,
//     bgColor: 'bg-green-50',
//     iconColor: 'text-green-500',
//   },
//   {
//     title: 'Visit Us',
//     description: 'Dhaka, Bangladesh',
//     icon: MapPin,
//     bgColor: 'bg-purple-50',
//     iconColor: 'text-purple-500',
//   },
// ];

// const ContactCard = ({ item }: { item: typeof contactItems[0] }) => (
//   <Card className={`${item.bgColor} hover:shadow-lg transition-shadow duration-300 text-center`}>
//     <CardContent className="p-8 flex flex-col items-center">
//       <div className={`p-4 rounded-full ${item.iconColor} bg-white shadow-sm mb-4`}>
//         <item.icon size={32} />
//       </div>
//       <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
//       <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
//     </CardContent>
//   </Card>
// );

// const ContactUs = () => {
//   return (
//     <section id='contact' className="w-full py-24 bg-card">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
//           <p className="text-muted-foreground mt-4">
//             Reach out to us for any questions or support regarding our turf booking platform.
//           </p>
//         </div>

//         {/* Contact Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {contactItems.map((item) => (
//             <ContactCard key={item.title} item={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const contactItems = [
  {
    title: 'Email Us',
    description: 'support@turfbooking.com',
    icon: Mail,
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Call Us',
    description: '+880 1234 567890',
    icon: Phone,
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    title: 'Visit Us',
    description: 'Dhaka, Bangladesh',
    icon: MapPin,
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
];

const ContactItem = ({ item }: { item: typeof contactItems[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center relative"
  >
    {/* Circle with icon */}
    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${item.color} shadow-lg`}>
      <item.icon className={`${item.iconColor}`} size={32} />
    </div>
    {/* Title & Description */}
    <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
    <p className="text-gray-600 text-sm mt-1 text-center">{item.description}</p>
  </motion.div>
);

export default function ContactUs() {
  return (
    <section id="contact" className="w-full py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Reach out to us for any questions or support regarding our turf booking platform.
        </p>

        {/* Connected Circles */}
        <div className="mt-16 relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* Horizontal connecting line (only on desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gray-200 z-0"></div>

          {contactItems.map((item) => (
            <div key={item.title} className="relative z-10 flex-1 flex justify-center">
              <ContactItem item={item} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="mt-16">
          <Link
            href="/contact-us"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition hover:bg-blue-700 hover:-translate-y-0.5 shadow-md"
          >
            Get in Touch
          </Link>
        </div> */}
      </div>
    </section>
  );
}
