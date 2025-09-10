import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import { CircleUserRound, Cuboid, LogIn, Menu, X } from "lucide-react";
import { Switch } from "../../components/ui/switch";
import { Button } from "../../components/ui/button";
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

function SignIn() {
  return (
    <div className="h-screen relative w-full bg-white image-sign-in md:px-10 px-5 pb-10 pt-6">
      <div className="max-w-[939.5px] h-full mx-auto flex flex-col max-[1525px]:items-center">
        <header className="min-w-full flex justify-between items-center backdrop-blur-lg shadow-lg bg-white/80 py-[27.5px] rounded-[15px] px-[23px]">
          <div className="text-secondary uppercase text-sm font-bold flex gap-3 items-center">
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
                    <button className="cursor-pointer rounded-[34.5px] bg-gradient-to-tr from-[#313860] to-[#151928] font-bold text-white text-[12px] mx- w-full py-2.5 px-[30.25px]">
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
                  className="text-secondary flex gap-1 text-[10px] font-bold"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="cursor-pointer rounded-[34.5px] bg-gradient-to-tr from-[#313860] to-[#151928] font-bold text-white text-[10px] py-2.5 px-[30.25px] lg:block hidden">
            Free Download
          </button>
        </header>
        <div className="md:mt-[188px] mt-10">
          <h2 className="text-[32px] font-bold text-primary mb-2">
            Welcome Back
          </h2>
          <p className="text-accent text-sm mb-6 max-w-[333px] leading-[140%]">
            Enter your email and password to sign in
          </p>
        </div>
        <form className="md:w-[350px] w-[290px] md:mt-[36px] mt-2 flex flex-col gap-6">
          <div>
            <label className="block text-secondary text-sm mb-1.5">Email</label>
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
          <div className="md:mt-6 mt-2 flex items-center gap-2">
            <Switch id="switch" defaultChecked />
            <label htmlFor="switch" className="text-gray-500 text-sm">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer md:mt-[36px] mt-2 bg-primary text-white font-bold py-[15px] text-[10px] rounded-[15px] hover:bg-teal-500 transition"
          >
            SIGN IN
          </button>
          <div className="text-sm text-accent text-center">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-primary font-bold hover:underline"
            >
              {" "}
              Sign up
            </Link>
          </div>
        </form>
        <div className="flex mt-auto justify-between w-full lg:flex-row gap-2 flex-col-reverse items-center ">
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

export default SignIn;
