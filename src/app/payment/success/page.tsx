import { Suspense } from "react";
import PaymentSuccessContent from "../../../components/modules/Payment/PaymentSuccessContent";

export const metadata = {
  title: "Payment Successful - Turf Booking",
  description:
    "Your payment was successful! Thank you for booking with us. You can view your booking details and manage your reservations.",
};

const PaymentSuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccessPage;
