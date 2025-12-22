import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ - Turf Sports Businesses Support",
  description:
    "Frequently Asked Questions for turf sports businesses using our platform. Get clarity on bookings, payments, and managing your turf online.",
};

export default function FaqPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A80E3] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          Clear answers to help you book your turf with confidence.
        </p>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 lg:px-16 pt-10 pb-20 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border rounded-xl px-5 cursor-pointer hover:shadow-md transition"
            >
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-left">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="text-base md:text-lg text-gray-700 leading-relaxed pt-2">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

const faqs = [
  {
    q: "Who is this platform for?",
    a: "This platform is designed for turf owners and turf managers who want to manage bookings online, reduce phone calls, and reach more customers easily.",
  },
  {
    q: "How does this platform help my turf business?",
    a: "It allows you to showcase your turf, display available fields and time slots, accept bookings online, and manage everything from a single dashboard.",
  },
  {
    q: "Do I need technical knowledge to use this?",
    a: "No. The system is built to be simple and user-friendly. You can manage your turf, fields, prices, and bookings without any technical experience.",
  },
  {
    q: "Can I add multiple fields under one turf?",
    a: "Yes. You can create multiple fields, set their slot duration, pricing, opening hours, and manage them independently.",
  },
  {
    q: "How do customers book my turf?",
    a: "Customers visit your turf’s public page, select a field, choose a date and time slot, and confirm their booking online.",
  },
  {
    q: "How will I receive booking information?",
    a: "All bookings appear in your dashboard, where you can see booking time, field, and customer details.",
  },
  {
    q: "Can I receive online payments from customers?",
    a: "Yes. Customers are required to pay online via bKash to confirm their booking. This ensures confirmed reservations and reduces no-shows for your turf.",
  },
  {
    q: "Can I share my turf profile with customers?",
    a: "Yes. Each turf gets a unique shareable link that you can send via Facebook, WhatsApp, or any other platform.",
  },
  {
    q: "Is this platform free to use?",
    a: "The platform is currently in MVP stage. Pricing and advanced features may be introduced later as the system evolves.",
  },
];
