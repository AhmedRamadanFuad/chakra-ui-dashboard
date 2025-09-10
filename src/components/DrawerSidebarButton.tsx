import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer";
import { Link } from "react-router";
import logoImage from "../assets/logo.svg";
import {
  CircleQuestionMark,
  CircleUser,
  CreditCard,
  Home,
  LogIn,
  Table,
  Wrench,
} from "lucide-react";

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

function DrawerSidebarButton() {
  return (
    <div className="lg:hidden block">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <div className="cursor-pointer flex justify-end mb-5">
            <ChevronRight />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="bg-background h-screen px-[42px] pt-5">
            {/* <div className="sticky top-11 w-[198px] "> */}
            <DrawerFooter>
              <DrawerClose asChild>
                {/* <Button variant="outline" className="w-fit ml-auto"> */}
                <div className="flex justify-end translate-x-6 cursor-pointer">
                  <ChevronLeft />
                </div>
                {/* </Button> */}
              </DrawerClose>
            </DrawerFooter>
            <h1 className="flex uppercase text-secondary font-bold text-sm gap-3 mt-4">
              <img src={logoImage} alt="" className="size-[22px] max-md:ml-1" />
              <span>PURITY UI DASHBOARD</span>
            </h1>
            <span className="w-full h-[1px] block mt-[27.5px] mb-[22.5px] bg-gradient-to-r from-transparent via-[#E0E1E2] to-transparent" />
            <ul className="flex flex-col md:gap-2 gap-4">
              {dasboardLinks.map((link, index) => (
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
                  <span>{link.name}</span>
                </Link>
              ))}
            </ul>
            <h2 className="uppercase font-bold text-secondary text-xs my-6 ml-4">
              ACCOUNT PAGES
            </h2>
            <ul className="flex flex-col md:gap-2 gap-4">
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
                  <span>{link.name}</span>
                </Link>
              ))}
            </ul>
            <div className="mt-[69.5px] bg-[url(src/assets/side-bar.png)] w-full h-[169.5px] rounded-[15px] p-4">
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
            {/* </div> */}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerSidebarButton;
