"use client";

import { choco } from "@/styles/fonts";
import { ThemeSwitcher } from "./themes";
import AnnouncementBar from "./announcement";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b-[1px] border-muted/50 bg-background/60 supports-[backdrop-filter]:backdrop-blur-sm">
      <AnnouncementBar>
        <span>kdv.lol has released! 🥳</span>
      </AnnouncementBar>
      <div className="mx-auto flex h-14 max-w-[1600px] items-center px-8">
        <div className="flex items-center gap-2">
          <span className={`${choco.className} select-none text-xl`}>
            kdv
            <span className="text-primary">_</span>
          </span>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
