import { Input } from "./ui/input";
import { Bell, CircleUserRound, Search, Settings } from "lucide-react";

function Header({ title }: { title?: string }) {
  return (
    <header className="flex justify-between w-full items-start pr-[25.5px] pl-[16.5px] mb-[26.5px]">
      <div>
        <div className="text-accent text-xs">
          Pages<span className="text-secondary"> / {title}</span>
        </div>
        <h2 className="font-bold text-secondary text-sm mt-[5.5px]">{title}</h2>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center">
          <Search className="text-secondary md:relative left-[26.5px] size-[15px]" />
          <Input placeholder="Type here..." className="md:block hidden" />
        </div>
        <div className="flex items-center gap-1 text-accent-foreground font-bold text-xs">
          <CircleUserRound className="size-[12px]" />
          <span className="hidden md:block"> Sign in</span>
        </div>
        <Settings className="size-[12px]" />
        <Bell className="size-[12px]" />
      </div>
    </header>
  );
}

export default Header;
