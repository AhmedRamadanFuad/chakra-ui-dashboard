import Header from "../../components/Header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PaymentsFooter from "./_components/PaymentsFooter";
import InvoicesCard from "./_components/InvoicesCard";
import PaypalCard from "./_components/PaypalCard";
import BillingInfoCard from "./_components/BillingInfoCard";
import TransactionsCard from "./_components/TransactionsCard";

function Billing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // 👈 hidden below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // 👈 fade + slide in when visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-full"
    >
      <Header title="Billing" />

      <div className="mt-[23.5px] grid grid-cols-1 xl:grid-cols-[minmax(0,989.5px)_minmax(0,584.5px)] gap-6">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 items-center">
            <div className="w-full">
              <img src="/assets/CreditCard.png" className="w-full" alt="" />
            </div>

            <PaypalCard />
          </div>

          <div>
            <PaymentsFooter />
          </div>
        </div>
        <InvoicesCard />
      </div>
      <div className="mt-[23.5px] grid grid-cols-1 xl:grid-cols-[minmax(0,_900px)_minmax(0,_674px)] gap-6">
        <BillingInfoCard />
        <TransactionsCard />
      </div>
      <div className="mt-6 grid w-full"></div>
    </motion.div>
  );
}

export default Billing;
