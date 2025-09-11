import { Bell, CircleUserRound, Pencil, Search, Settings } from "lucide-react";
import { Input } from "../../../components/ui/input";

export default function ProfileHeader() {
  return (
    <div className="w-full">
      <div className="bg-[url(/assets/bg-profile.png)] max-w-[1598px] bg-no-repeat h-full lg:h-[300px] rounded-[15px] px-6 pt-6 max-lg:pb-6 flex flex-col justify-between">
        <header className="flex justify-between w-full items-start pr-[25.5px] ml-[16.5px] mb-[26.5px] h-full lg:h-[300px]">
          <div>
            <div className="text-white text-xs">
              Pages<span className="text-white"> / Profile</span>
            </div>
            <h2 className="font-bold text-white text-sm mt-[5.5px]">Profile</h2>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center">
              <Search className="text-secondary md:relative left-[26.5px] size-[15px]" />
              <Input placeholder="Type here..." className="md:block hidden" />
            </div>
            <div className="flex items-center gap-1 text-white font-bold text-xs">
              <CircleUserRound className="size-[12px]" />
              <span className="hidden md:block"> Sign in</span>
            </div>
            <Settings className="size-[12px] text-white" />
            <Bell className="size-[12px] text-white" />
          </div>
        </header>
        <div className="translate-y-17 lg:translate-y-1/2 lg:h-[113px] backdrop-blur-lg bg-white/80 lg:max-w-[1550px] lg:p-2 p-4 flex lg:flex-row flex-col justify-between items-center rounded-[15px]">
          <div className="flex items-center gap-4 lg:flex-row flex-col">
            <div className="relative">
              <img
                src="/assets/author1.png"
                alt="Profile"
                className="w-20 h-20 object-cover rounded-[15px] relative"
              />
              <div className="absolute -bottom-1 -right-1 lg:bottom-[-4px] lg:left-14 p-[7px] bg-white rounded-[8px] shadow">
                <Pencil fill="#4fd1c5" className="text-white size-3" />
              </div>
            </div>
            <div>
              <div className="font-bold text-secondary text-lg">
                Esthera Jackson
              </div>
              <div className="text-sm text-accent-foreground font-normal">
                esthera@simmmple.com
              </div>
            </div>
          </div>
          <div className="flex mt-2 sm:flex-nowrap flex-wrap">
            <button className="cursor-pointer bg-white text-secondary font-bold rounded-[12px] px-3 sm:px-10 py-2.5 text-xs shadow">
              OVERVIEW
            </button>
            <button className="text-secondary font-bold  py-2.5 text-xs cursor-pointer px-3 sm:px-10">
              TEAMS
            </button>
            <button className="text-secondary font-bold  py-2.5 text-xs cursor-pointer px-3 sm:px-10">
              PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
