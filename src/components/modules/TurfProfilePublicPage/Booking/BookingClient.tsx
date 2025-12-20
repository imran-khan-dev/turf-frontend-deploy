/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, DollarSign, User } from "lucide-react";
import HeroSection from "@/components/modules/TurfProfilePublicPage/Hero/HeroSectionTurfVenue";
import ContactSectionTurfVenue from "@/components/modules/TurfProfilePublicPage/Contact/ContactSectionTurfVenue";
import FooterSectionTurfVenue from "@/components/modules/TurfProfilePublicPage/Footer/FooterSectionTurfVenue";

interface BookingClientProps {
  field: any;
  user: { name: string; email: string };
  turfProfile: any;
}

export default function BookingClient({
  field,
  user,
  turfProfile,
}: BookingClientProps) {
  const router = useRouter();

  const [date, setDate] = useState<Date>();
  const [slots, setSlots] = useState<any[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any | null>(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch slots when date changes
  useEffect(() => {
    if (!date) {
      setSlots([]);
      setSelectedSlot(null);
      return;
    }

    const fetchSlots = async () => {
      setLoadingSlots(true);
      try {
        const res = await fetch(
          `/api/slots?fieldId=${field.id}&date=${format(date, "yyyy-MM-dd")}`
        );
        const json = await res.json();
        setSlots(json || []);
      } catch {
        setSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [date, field.id]);

  const handleConfirmBooking = async () => {
    if (!selectedSlot) {
      setError("Please select a slot");
      return;
    }
    setError(null);
    setBookingLoading(true);

    try {
      const res = await fetch(`/api/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          turfProfileId: field.turfProfileId,
          turfFieldId: field.id,
          startISO: selectedSlot.startISO,
          endISO: selectedSlot.endISO,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.message || "Booking failed");
        return;
      }
      router.push(`/booking/${json.data.booking.id}`);
    } catch {
      setError("Booking failed");
    } finally {
      setBookingLoading(false);
    }
  };

  // Modular subcomponents
  const FieldInfo = () => (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
      <h2 className="text-2xl font-bold text-[#1A80E3]">{field.name}</h2>
      <p className="text-gray-600">
        {field.description || "No description available."}
      </p>
      <div className="flex gap-6 text-gray-700 mt-2">
        <div className="flex items-center gap-1">
          <DollarSign size={16} className="text-[#1A80E3]" />
          <span>{field.pricePerSlot} ৳ / slot</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} className="text-[#1A80E3]" />
          <span>{field.slotDuration} min</span>
        </div>
      </div>
    </div>
  );

  const DatePicker = () => (
    <div className="bg-white rounded-xl shadow p-6">
      <label className="font-semibold flex items-center gap-2 mb-3">
        <CalendarDays size={18} /> Select Date
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Input
            readOnly
            placeholder="Pick a date"
            value={date ? format(date, "PPP") : ""}
            className="cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );

  const Slots = () => (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">Available Slots</h3>
      {loadingSlots && <p className="text-gray-500">Loading slots...</p>}
      {!loadingSlots && date && slots.length === 0 && (
        <p className="text-gray-500">No slots available for this date.</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {slots.map((slot: any) => {
          const isSelected = selectedSlot?.startISO === slot.startISO;
          return (
            <button
              key={slot.startISO}
              disabled={!slot.status}
              onClick={() => setSelectedSlot(slot)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition
                ${
                  isSelected
                    ? "bg-[#1A80E3] text-white shadow"
                    : slot.status
                    ? "bg-green-50 hover:bg-green-100 text-green-800"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
            >
              {slot.start} – {slot.end}
            </button>
          );
        })}
      </div>
    </div>
  );

  const BookingSummary = () => (
    <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-6 space-y-4">
      <h3 className="font-semibold mb-4 text-lg">Booking Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <User size={16} className="text-[#1A80E3]" />
          <span>
            <strong>User:</strong> {user?.name} ({user?.email})
          </span>
        </div>
        <p>
          <strong>Turf:</strong> {turfProfile?.name}
        </p>
        <p>
          <strong>Field:</strong> {field.name}
        </p>
        <p>
          <strong>Date:</strong> {date ? format(date, "PPP") : "Not selected"}
        </p>
        <p>
          <strong>Time:</strong>{" "}
          {selectedSlot
            ? `${selectedSlot.start} – ${selectedSlot.end}`
            : "Not selected"}
        </p>
        <p>
          <strong>Duration:</strong> {field.slotDuration} min
        </p>
        <hr />
        <p className="text-lg font-bold flex justify-between">
          <span>Total</span>
          <span>{field.pricePerSlot} ৳</span>
        </p>
      </div>
      <Button
        onClick={handleConfirmBooking}
        disabled={!selectedSlot || bookingLoading}
        className="w-full mt-4 bg-[#1A80E3] hover:bg-blue-700"
      >
        {bookingLoading ? "Booking..." : "Confirm Booking"}
      </Button>
    </div>
  );

  const takeToFields = () =>
    (window.location.href = `/${turfProfile.slug}#turf-fields`);

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      {/* Hero */}
      <HeroSection
        profile={turfProfile}
        turfUser={user}
        scrollToFields={takeToFields}
      />

      <section className="py-24 pb-0">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT Column */}
          <div className="lg:col-span-2 space-y-6">
            <FieldInfo />
            <DatePicker />
            <Slots />
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                {error}
              </div>
            )}
          </div>

          {/* RIGHT Column */}
          <BookingSummary />
        </div>
      </section>

      {/* Contact */}
      <ContactSectionTurfVenue profile={turfProfile} />
      {/* Footer */}
      <FooterSectionTurfVenue profile={turfProfile} />
    </div>
  );
}
