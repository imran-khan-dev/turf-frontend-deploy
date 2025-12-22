import { Suspense } from "react";
import PaymentCancelContent from "../../../components/modules/Payment/PaymentCancelContent";

export const metadata = {
  title: "Payment Cancelled - Turf Booking",
  description: "Your payment has been cancelled. You can try booking again or contact support for assistance.",
};

const PaymentCancelPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentCancelContent />
    </Suspense>
  );
};

export default PaymentCancelPage;
