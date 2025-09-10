import { cn } from "../../../lib/utils";

export default function PaymentsFooter() {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a202c] rounded-2xl shadow p-6 w-full h-full mb-8 flex flex-col"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-base text-gray-700 dark:text-gray-200">
          Payment Method
        </span>
        <button className="bg-[#23234c] text-white rounded-[15px] px-6 py-2.5 font-bold text-[10px]">
          ADD A NEW CARD
        </button>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-6 py-4 flex-1">
          <span className="inline-flex items-center mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="12" r="6" fill="#eb001b" />
              <circle cx="16" cy="12" r="6" fill="#f79e1b" />
            </svg>
          </span>
          <span className="text-gray-500">7812 2139 0823 XXXX</span>
          <button className="ml-auto text-gray-400 hover:text-[#4fd1c5]">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M19 20v-9" />
            </svg>
          </button>
        </div>
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-6 py-4 flex-1">
          <span className="inline-flex items-center mr-2 font-bold text-xs text-[#6c63ff]">
            VISA
          </span>
          <span className="text-gray-500">7812 2139 0823 XXXX</span>
          <button className="ml-auto text-gray-400 hover:text-[#4fd1c5]">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M19 20v-9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// export function PaymentMethod() {
//   return (
//     <div
//       className={cn(
//         "bg-white dark:bg-[#1a202c] rounded-2xl shadow p-6 w-full mb-8"
//       )}
//     >
//       <div className="font-bold text-base text-gray-700 dark:text-gray-200 mb-4">
//         Payment Method
//       </div>
//       <div className="flex max-md:flex-col gap-4">
//         <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3 flex-1">
//           <FaCcMastercard className="text-[#eb001b] w-6 h-6 mr-2" />
//           <span className="text-gray-500">7812 2139 0823 XXXX</span>
//           <button className="ml-auto text-gray-400 hover:text-[#4fd1c5]">
//             <svg
//               width="18"
//               height="18"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 20h9" />
//               <path d="M19 20v-9" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3 flex-1">
//           <FaCcVisa className="text-[#1a1f71] w-6 h-6 mr-2" />
//           <span className="text-gray-500">7812 2139 0823 XXXX</span>
//           <button className="ml-auto text-gray-400 hover:text-[#4fd1c5]">
//             <svg
//               width="18"
//               height="18"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 20h9" />
//               <path d="M19 20v-9" />
//             </svg>
//           </button>
//         </div>
//         <button className="bg-[#4fd1c5] text-white rounded-xl px-6 py-3 font-bold text-xs ml-2">
//           ADD A NEW CARD
//         </button>
//       </div>
//     </div>
//   );
// }
