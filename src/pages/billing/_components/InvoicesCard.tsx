import { cn } from "../../../lib/utils";
import { FaFilePdf } from "react-icons/fa";

const invoices = [
  { date: "March, 01, 2020", id: "#MS-415646", amount: "$180" },
  { date: "February, 10, 2021", id: "#RV-126749", amount: "$250" },
  { date: "April, 05, 2020", id: "#FB-212562", amount: "$560" },
  { date: "June, 25, 2019", id: "#QW-103578", amount: "$120" },
  { date: "March, 01, 2019", id: "#AR-803481", amount: "$300" },
];

export default function InvoicesCard() {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a202c] rounded-2xl shadow p-6 w-full "
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Invoices
        </div>
        <button className="border border-[#4fd1c5] text-[#4fd1c5] rounded-xl px-4 py-1 text-xs font-bold">
          VIEW ALL
        </button>
      </div>
      <div>
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
          >
            <div>
              <div className="font-bold text-sm text-gray-700 dark:text-gray-200">
                {inv.date}
              </div>
              <div className="text-xs text-[#4fd1c5] font-semibold">
                {inv.id}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-700 dark:text-gray-200">
                {inv.amount}
              </span>
              <FaFilePdf className="text-gray-400 w-5 h-5" />
              <span className="text-xs text-gray-400">PDF</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
