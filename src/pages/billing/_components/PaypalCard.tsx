import { cn } from "../../../lib/utils";

export default function PaypalCard() {
  return (
    <div className="flex sm:flex-row flex-col gap-6 w-full">
      <div
        className={cn(
          "bg-white dark:bg-[#1a202c] rounded-2xl shadow w-full flex flex-col items-center justify-center p-6"
        )}
      >
        <div className="bg-[#4fd1c5] rounded-xl p-4 mb-4 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#4fd1c5" />
            <path
              d="M25.5 13.5h-6.5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h6.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-1.5 8.5h-2v-2h2v2zm0-3.5h-2v-2h2v2z"
              fill="white"
            />
          </svg>
        </div>
        <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Salary
        </div>
        <div className="text-xs text-gray-400 mb-2">Belong Interactive</div>
        <hr className="w-full border-t border-gray-100 my-2" />
        <div className="font-bold text-xl text-gray-700 dark:text-gray-200 mt-2">
          +$2000
        </div>
      </div>
      <div
        className={cn(
          "bg-white w-full dark:bg-[#1a202c] rounded-2xl shadow flex flex-col items-center justify-center p-6"
        )}
      >
        <div className="bg-[#4fd1c5] rounded-xl p-4 mb-4 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#4fd1c5" />
            <path
              d="M25.5 13.5h-6.5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h6.5c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-1.5 8.5h-2v-2h2v2zm0-3.5h-2v-2h2v2z"
              fill="white"
            />
          </svg>
        </div>
        <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Paypal
        </div>
        <div className="text-xs text-gray-400 mb-2">Freelance Payment</div>
        <hr className="w-full border-t border-gray-100 my-2" />
        <div className="font-bold text-xl text-gray-700 dark:text-gray-200 mt-2">
          $455.00
        </div>
      </div>
    </div>
  );
}
