import { cn } from "../../../lib/utils";

const transactions = [
  {
    company: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    amount: "-$2500",
    type: "down",
    color: "#e53e3e",
    section: "NEWEST",
  },
  {
    company: "Apple",
    date: "27 March 2020, at 12:30 PM",
    amount: "+$2500",
    type: "up",
    color: "#38a169",
    section: "NEWEST",
  },
  {
    company: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    amount: "+$800",
    type: "up",
    color: "#38a169",
    section: "YESTERDAY",
  },
  {
    company: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: "+$1700",
    type: "up",
    color: "#38a169",
    section: "YESTERDAY",
  },
  {
    company: "Webflow",
    date: "26 March 2020, at 05:00 AM",
    amount: "Pending",
    type: "pending",
    color: "#718096",
    section: "YESTERDAY",
  },
  {
    company: "Microsoft",
    date: "25 March 2020, at 16:30 PM",
    amount: "-$987",
    type: "down",
    color: "#e53e3e",
    section: "YESTERDAY",
  },
];

function TransactionIcon({ type }: { type: string }) {
  if (type === "up")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#38a169] mr-2">
        <svg width="16" height="16" fill="none">
          <path
            d="M8 12V4M8 4l-4 4M8 4l4 4"
            stroke="#38a169"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  if (type === "down")
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#e53e3e] mr-2">
        <svg width="16" height="16" fill="none">
          <path
            d="M8 4v8M8 12l-4-4M8 12l4-4"
            stroke="#e53e3e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#718096] mr-2">
      <svg width="16" height="16" fill="none">
        <circle cx="8" cy="8" r="3" stroke="#718096" strokeWidth="2" />
      </svg>
    </span>
  );
}

export default function TransactionsCard() {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a202c] rounded-2xl p-6 shadow w-full "
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Your Transactions
        </div>
        <div className="text-xs text-gray-400 font-semibold flex items-center gap-1">
          <svg width="16" height="16" fill="none" className="mr-1">
            <rect
              x="2"
              y="4"
              width="12"
              height="10"
              rx="2"
              stroke="#718096"
              strokeWidth="2"
            />
            <path
              d="M6 2v2M10 2v2"
              stroke="#718096"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          23 - 30 March 2020
        </div>
      </div>
      <div>
        <div className="text-xs text-gray-400 font-bold mb-2">NEWEST</div>
        {transactions
          .filter((t) => t.section === "NEWEST")
          .map((t, i) => (
            <div
              key={i}
              className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4"
            >
              <div className="flex items-center">
                <TransactionIcon type={t.type} />
                <div>
                  <div className="font-bold text-gray-700 dark:text-gray-200 text-sm">
                    {t.company}
                  </div>
                  <div className="text-xs text-gray-400">{t.date}</div>
                </div>
              </div>
              <div
                className={cn(
                  "font-bold text-sm",
                  t.type === "down"
                    ? "text-[#e53e3e]"
                    : t.type === "up"
                    ? "text-[#38a169]"
                    : "text-[#718096]"
                )}
              >
                {t.amount}
              </div>
            </div>
          ))}
        <div className="text-xs text-gray-400 font-bold mb-2">YESTERDAY</div>
        {transactions
          .filter((t) => t.section === "YESTERDAY")
          .map((t, i) => (
            <div
              key={i}
              className="flex mb-4 sm:flex-row flex-col sm:items-center sm:justify-between gap-2 sm:gap-0"
            >
              <div className="flex items-center">
                <TransactionIcon type={t.type} />
                <div>
                  <div className="font-bold text-gray-700 dark:text-gray-200 text-sm">
                    {t.company}
                  </div>
                  <div className="text-xs text-gray-400">{t.date}</div>
                </div>
              </div>
              <div
                className={cn(
                  "font-bold text-sm",
                  t.type === "down"
                    ? "text-[#e53e3e]"
                    : t.type === "up"
                    ? "text-[#38a169]"
                    : "text-[#718096]"
                )}
              >
                {t.amount}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
