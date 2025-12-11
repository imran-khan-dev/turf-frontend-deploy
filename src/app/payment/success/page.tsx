import { Suspense } from "react";
import PaymentSuccessContent from "./PaymentSuccessContent";

const PaymentSuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccessPage;
