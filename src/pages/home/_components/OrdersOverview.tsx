import { cn } from "../../../lib/utils";
import { FaBell, FaServer, FaCreditCard, FaBoxes } from "react-icons/fa";

const orders = [
  {
    icon: <FaBell className="text-[#4fd1c5] w-5 h-5" />,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "#4fd1c5",
  },
  {
    icon: <img src="/icons/html5.svg" alt="html5" className="w-5 h-5" />,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "#f16529",
  },
  {
    icon: <FaServer className="text-[#4fd1c5] w-5 h-5" />,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "#4fd1c5",
  },
  {
    icon: <FaCreditCard className="text-[#f6ad55] w-5 h-5" />,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "#f6ad55",
  },
  {
    icon: <FaBoxes className="text-[#805ad5] w-5 h-5" />,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "#805ad5",
  },
  {
    icon: <img src="/icons/xd.svg" alt="xd" className="w-5 h-5" />,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
    color: "#e47bff",
  },
];

export default function OrdersOverview() {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#1a202c] rounded-2xl p-6 shadow min-w-full max-w-xs mx-auto"
      )}
    >
      <div className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
        Orders overview
      </div>
      <div className="text-xs text-[#4fd1c5] font-semibold mb-4">
        +30% <span className="text-gray-400 font-normal ml-1">this month</span>
      </div>
      <div className="relative pl-6">
        <div
          className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full"
          style={{ zIndex: 0 }}
        />
        {orders.map((order, i) => (
          <div
            key={i}
            className="relative flex items-start mb-6 last:mb-0"
            style={{ zIndex: 1 }}
          >
            <div className="absolute left-[-20px] top-0 bg-white z-10 py-1 ">
              {order.icon}
            </div>
            <div className="ml-5">
              <div className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
                {order.title}
              </div>
              <div className="text-xs text-gray-400 mt-1">{order.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
