"use client";

import { Search, Bell, HelpCircle } from "lucide-react";

const TopNav: React.FC = () => {
  return (
    <header className="sticky top-0 right-0 flex items-center justify-between bg-transparent z-40 backdrop-blur-sm h-16 px-0 md:px-6">
      {/* Left: heading + subtitle */}
      <div className="hidden sm:flex flex-col gap-0.5">
        <h2 className="m-0 text-white font-bold leading-none text-xl">
          Welcome back, Alex
        </h2>
        <p className="m-0 text-[#4e8a96] text-xs">Here&apos;s your financial overview</p>
      </div>

      {/* Right: icons + avatar */}
      <div className="flex items-center ml-auto gap-2.5">
        {[
          { Icon: Search, label: "Search" },
          { Icon: Bell, label: "Notifications" },
          { Icon: HelpCircle, label: "Help" },
        ].map(({ Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="flex items-center justify-center text-[#6a9fae] cursor-pointer hover:text-white transition-colors bg-[#0e2330] border border-white/8 rounded-xl w-9 h-9"
          >
            <Icon size={16} />
          </button>
        ))}

        {/* Avatar */}
        <div className="rounded-full bg-linear-to-b from-[#08c1c1] to-[#0fa3a3] flex items-center justify-center font-bold text-[#021515] select-none w-9 h-9 text-sm ml-1">
          A
        </div>
      </div>
    </header>
  );
};

export default TopNav;
