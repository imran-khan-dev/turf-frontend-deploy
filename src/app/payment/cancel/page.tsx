import { Suspense } from "react";
import PaymentCancelContent from "./PaymentCancelContent";

const PaymentCancelPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentCancelContent />
    </Suspense>
  );
};

export default PaymentCancelPage;
