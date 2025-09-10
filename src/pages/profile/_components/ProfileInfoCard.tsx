import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { cn } from "../../../lib/utils";

export default function ProfileInfoCard() {
  return (
    <div
      className={cn("bg-white rounded-[15px] shadow pt-7 px-5 pb-6 w-full ")}
    >
      <div className="font-bold text-lg text-secondary mb-4">
        Profile Information
      </div>
      <div className="text-xs text-accent leading-[150%] mb-4">
        Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term (pain avoidance is creating an illusion of equality).
      </div>
      <span className="w-full h-[1px] block my-[30px] bg-gradient-to-r from-transparent via-[#E0E1E2] to-transparent" />
      <div className="flex flex-col gap-[18px]">
        <div className="flex gap-4 text-xs">
          <span className="font-bold text-accent-foreground">Full Name:</span>
          <span className="text-accent">Alec M. Thompson</span>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="font-bold text-accent-foreground">Mobile:</span>
          <span className="text-accent">(44) 123 1234 123</span>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="font-bold text-accent-foreground">Email:</span>
          <span className="text-accent">alecthompson@mail.com</span>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="font-bold text-accent-foreground">Location:</span>
          <span className="text-accent">United States</span>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="font-bold text-accent-foreground">
            Social Media:
          </span>
          <span className="text-accent">United States</span>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <span className="font-bold text-gray-700 dark:text-gray-200 min-w-[90px]">
            Social Media:
          </span>
          <a href="#" className="text-[#4fd1c5] mr-2">
            <FaFacebook />
          </a>
          <a href="#" className="text-[#4fd1c5] mr-2">
            <IoLogoTwitter />
          </a>
          <a href="#" className="text-[#4fd1c5]">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
