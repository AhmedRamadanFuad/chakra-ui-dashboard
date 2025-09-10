import { cn } from "../../../lib/utils";
import { FaTrashAlt } from "react-icons/fa";

const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
];

export default function BillingInfoCard() {
  return (
    <div className={cn("bg-white  rounded-[15px] p-6 w-full")}>
      <div className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-4">
        Billing Information
      </div>
      <div className="flex flex-col gap-6">
        {billingData.map((item, i) => (
          <div
            key={i}
            className="bg-[#F8F9FA] dark:bg-[#23234c] rounded-xl p-6 flex sm:flex-row flex-col sm:items-center sm:justify-between gap-2 sm:gap-0"
          >
            <div>
              <div className="font-bold text-base text-gray-700 dark:text-gray-200 mb-1">
                {item.name}
              </div>
              <div className="text-sm text-gray-500 mb-1">
                Company Name:{" "}
                <span className="font-semibold text-gray-600">
                  {item.company}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-1">
                Email Address:{" "}
                <span className="font-semibold text-gray-600">
                  {item.email}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                VAT Number:{" "}
                <span className="font-bold text-gray-600">{item.vat}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-[#e53e3e] font-bold text-xs">
                <FaTrashAlt className="w-4 h-4" /> DELETE
              </button>
              <button className="flex items-center gap-1 text-gray-500 font-bold text-xs">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M19 20v-9" />
                </svg>{" "}
                EDIT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
