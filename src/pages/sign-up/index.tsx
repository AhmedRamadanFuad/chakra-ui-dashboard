import { Link } from "react-router";
import logo from "../../assets/logo-white.png";
import { CircleUserRound, Cuboid, LogIn, Menu, X } from "lucide-react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Switch } from "../../components/ui/switch";

import Button from "../../components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../../components/ui/drawer";

const links = [
  { name: "Dasboard", href: "/", icon: <Cuboid className="size-3" /> },
  {
    name: "Profile",
    href: "/profile",
    icon: <CircleUserRound className="size-3" />,
  },
  { name: "Sign up", href: "/sign-up", icon: <LogIn className="size-3" /> },
  {
    name: "Sign in",
    href: "/sign-in",
    icon: <LogIn className="size-3 rotate-180" />,
  },
];
function SignUp() {
  return (
    <div className="h-screen w-full flex flex-col bg-white p-5">
      <div className="image2 min-h-[520.5px] w-full rounded-[15px] px-10">
        <header className="mt-11 flex justify-between items-center max-w-[939.5px] mx-auto">
          <div className="text-white uppercase text-sm font-bold flex gap-3 items-center">
            <img src={logo} className="size-[22px]" alt="" />
            PURITY UI DASHBOARD
          </div>
          <div className="lg:hidden block">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="right-0">
                <div className="mx-auto w-[300px] max-w-sm ">
                  <DrawerFooter>
                    {/* <Button>Submit</Button> */}
                    <DrawerClose asChild>
                      <Button variant="outline" className="w-fit ml-auto">
                        <X />
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                  <ul className=" gap-[30px] flex flex-col p-5">
                    {links.map((item) => (
                      <li key={item.name}>
                        <Link
                          key={item.href}
                          to={item.href}
                          className="text-secondary flex items-center gap-1 text-[14px] font-bold"
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                    <button className="cursor-pointer rounded-[34.5px] bg-secondary font-bold text-white text-[12px] mx- w-full py-2.5 px-[30.25px]">
                      Free Download
                    </button>
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <ul className=" gap-[30px] lg:flex hidden">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-white flex gap-1 text-[10px] font-bold"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="cursor-pointer rounded-[34.5px] bg-white font-bold text-secondary text-[10px] py-2.5 px-[30.25px] lg:block hidden">
            Free Download
          </button>
        </header>
        <div className="text-center mt-[55px] flex flex-col items-center">
          <h2 className="text-[32px] font-bold text-white mb-2">Welcome!</h2>
          <p className="text-white text-sm mb-6 max-w-[333px] leading-[140%]">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center relative -top-[241.5px]">
        <div className="bg-white shadow-lg md:w-[452.5px] sm:w-[360px] w-[290px] rounded-[15px] py-[45.5px] px-5 md:px-[51.5px] flex flex-col items-center">
          <h3 className="text-lg font-bold text-secondary text-center mb-[22px]">
            Register with
          </h3>
          <div className="flex gap-4 mb-4">
            <button className="md:p-[20.5px] p-3  rounded-[15px] border border-gray-200 cursor-pointer">
              <FaFacebook className="text-secondary size-[31px]" />
            </button>
            <button className="md:p-[20.5px] p-3 rounded-[15px] border border-gray-200 cursor-pointer">
              <FaApple className="text-secondary size-[31px]" />
            </button>
            <button className="md:p-[20.5px] p-3  rounded-[15px] border border-gray-200 cursor-pointer">
              <FaGoogle className="text-secondary size-[31px]" />
            </button>
          </div>
          <span className="my-5 text-accent font-bold text-lg">or</span>
          <form className="w-full flex flex-col gap-6">
            <div>
              <label className="block text-secondary text-sm mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-5 md:py-[15.5px] py-2 rounded-[15px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>
            <div>
              <label className="block text-secondary text-sm mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 md:py-[15.5px] py-2 rounded-[15px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>
            <div>
              <label className="block text-secondary text-sm mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-5 md:py-[15.5px] py-2 rounded-[15px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>
            <div className="mt-6 flex items-center gap-2">
              <Switch id="switch" defaultChecked />
              <label htmlFor="switch" className="text-gray-500 text-sm">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer mt-[36px] bg-primary text-white font-bold py-[15px] text-[10px] rounded-[15px] hover:bg-teal-500 transition"
            >
              SIGN UP
            </button>
            <div className="text-sm text-accent text-center">
              Already have an account?
              <Link
                to="/sign-in"
                className="text-primary font-bold hover:underline"
              >
                {" "}
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center relative -top-[52.5px] p-5 sm:px-10">
        <div className="w-[1044px] flex lg:flex-row gap-2 flex-col-reverse justify-between items-center">
          <footer className="text-xs text-gray-400 text-center ">
            @ 2021, Made with <span className="text-red-400">♥</span> by{" "}
            <a href="#" className="text-teal-400 font-semibold">
              Creative Tim
            </a>{" "}
            &{" "}
            <a href="#" className="text-teal-400 font-semibold">
              Simmmple
            </a>{" "}
            for a better web
          </footer>
          <div className="flex justify-center gap-4 md:gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-teal-400">
              Creative Tim
            </a>
            <a href="#" className="hover:text-teal-400">
              Simmmple
            </a>
            <a href="#" className="hover:text-teal-400">
              Blog
            </a>
            <a href="#" className="hover:text-teal-400">
              License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
