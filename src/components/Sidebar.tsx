import { Link } from "react-router";
import {
  CircleQuestionMark,
  CircleUser,
  CreditCard,
  Home,
  LogIn,
  Table,
  Wrench,
} from "lucide-react";
import { useLocation } from "react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DrawerSidebarButton from "./DrawerSidebarButton";

const dasboardLinks = [
  { href: "/", name: "Dashboard", icon: <Home className="size-[15px]" /> },
  { href: "/table", name: "Table", icon: <Table className="size-[15px]" /> },
  {
    href: "/billing",
    name: "Billing",
    icon: <CreditCard className="size-[15px]" />,
  },
  { href: "/rtl", name: "RTL", icon: <Wrench className="size-[15px]" /> },
];
const accountLinks = [
  {
    href: "/profile",
    name: "Profile",
    icon: <CircleUser className="size-[15px]" />,
  },
  {
    href: "/sign-in",
    name: "Sign in",
    icon: <LogIn className="size-[15px]" />,
  },
  {
    href: "/sign-up",
    name: "Sign up",
    icon: <LogIn className="size-[15px] rotate-180" />,
  },
];

function Sidebar() {
  const location = useLocation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-background h-full lg:pl-[42px] px-3 pt-11 lg:pr-[13.5px]"
    >
      <div className="lg:w-[198px] w-[50px] max-lg:flex flex-col items-center">
        <DrawerSidebarButton />
        <h1 className="flex uppercase text-secondary font-bold text-sm gap-3 ">
          <img
            src="/assets/logo.svg"
            alt=""
            className="size-[22px] ml-auto lg:ml-0"
          />
          <span className="lg:block hidden">PURITY UI DASHBOARD</span>
        </h1>
        <span className="w-full h-[1px] block lg:mt-[27.5px] mt-4 mb-1 lg:mb-[22.5px] bg-gradient-to-r from-transparent via-[#E0E1E2] to-transparent" />
        <ul className="flex flex-col gap-2">
          {dasboardLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`group px-4 py-3 flex gap-3 md:px-4 md:py-3 transition duration-300 rounded-[15px] lg:hover:bg-white hover:text-secondary items-center font-bold text-xs ${
                link.href === location.pathname
                  ? "lg:bg-white text-secondary"
                  : "text-accent"
              } `}
            >
              <div
                className={`p-[7.5px] rounded-[12px] group-hover:bg-primary group-hover:text-white transition duration-300 ${
                  link.href === location.pathname
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                {link.icon}
              </div>
              <span className="lg:block hidden">{link.name}</span>
            </Link>
          ))}
        </ul>
        <h2 className="uppercase font-bold text-secondary text-xs my-6 ml-4 lg:block hidden">
          ACCOUNT PAGES
        </h2>
        <ul className="flex flex-col gap-2 ">
          {accountLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`group px-4 py-3 flex gap-3 md:px-4 md:py-3 transition duration-300 rounded-[15px] hover:bg-white hover:text-secondary items-center font-bold text-xs ${
                link.href === location.pathname
                  ? "bg-white text-secondary"
                  : "text-accent"
              } `}
            >
              <div
                className={`p-[7.5px] rounded-[12px] group-hover:bg-primary group-hover:text-white transition duration-300 ${
                  link.href === location.pathname
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                {link.icon}
              </div>
              <span className="lg:block hidden">{link.name}</span>
            </Link>
          ))}
        </ul>
        <div className="mt-[69.5px] bg-[url(/assets/side-bar.png)] w-full h-[169.5px] rounded-[15px] p-4 lg:block hidden">
          <div className="mb-[21.5px]">
            <div className="p-[8.5px] bg-white w-fit rounded-[12px]">
              <CircleQuestionMark
                fill="#4fd1c5"
                className="text-white size-[22px]"
              />
            </div>
          </div>
          <div className="mb-[8.5px] text-white">
            <h4 className="font-bold text-sm">Need help?</h4>
            <p className="text-xs">Please check our docs</p>
          </div>
          <button className="cursor-pointer uppercase text-[10px] font-bold text-secondary py-2.5 w-full rounded-[12px] bg-white">
            Documentation
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
