import { Suspense } from "react";
import PaymentCancelContent from "../../../components/modules/Payment/PaymentCancelContent";

const PaymentCancelPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentCancelContent />
    </Suspense>
  );
};

export default PaymentCancelPage;
