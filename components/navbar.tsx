"use client";

import { ThemeSwitcher } from "./themeSwitcher";
import AnnouncementBar from "./announcement";
import {
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import DiscordDialog from "./discordDialog";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b-[1px] border-muted/50 bg-background/60 supports-[backdrop-filter]:backdrop-blur-sm">
      {/* <AnnouncementBar>
        <span>
        </span>
      </AnnouncementBar> */}
      <div className="mx-auto flex h-14 max-w-[1600px] items-center px-8">
        <div className="flex items-center gap-2">
          <span className="select-none font-choco text-xl">
            kdv
            <span className="text-primary">_</span>
          </span>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-secondary hover:text-secondary-foreground"
            asChild
          >
            <a href="https://github.com/kirbodev" target="_blank">
              <IconBrandGithubFilled className="size-6" />
            </a>
          </Button>
          <DiscordDialog className="rounded-md ring-offset-background transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <div className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium">
              <IconBrandDiscordFilled className="size-6" />
            </div>
          </DiscordDialog>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
