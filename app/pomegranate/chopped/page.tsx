"use client";
import { Chopped } from "@/components/Chopped";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";

const data = {
  userId: "695228246966534255",
  statistics: {
    usageCount: 1100,
    favoriteCommand: "modstats",
    commandUsage: {
      afk: 16,
      changelog: 22,
      hw: 42,
      say: 70,
      ban: 33,
      unban: 11,
      ping: 104,
      eval: 139,
      whois: 21,
      mute: 21,
      caselogs: 30,
      warn: 90,
      unwarn: 30,
      modstats: 171,
      kick: 8,
      avatar: 44,
      unmute: 9,
      sendapplybutton: 12,
      help: 14,
      slowmode: 3,
      cmdstats: 22,
      snipe: 86,
      restart: 54,
      bigemoji: 3,
      banner: 16,
      otp: 1,
      randomban: 23,
      restore: 3,
      maintainance: 1,
      aimute: 1,
    },
    favoriteType: "slash",
    favoriteTypePercent: 74,
    dailyUsageCount: 141,
    highestDailyStreak: 5,
    moderation: {
      warns: 18,
      warnPercentile: 99,
      unwarns: 1,
      heavies: 4,
      mutes: 1,
      muteTime: 598426,
      longestMute: 598426,
      kicks: 0,
      bans: 4,
    },
    badges: [
      "Danger Zone - Top 10% most warned",
      "Second Chance - Unbanned multiple times",
      "Phoenix Rising - Improved moderation actions in the second half of the year",
      "Spring Bloom - Most active in spring",
    ],
  },
};

const colors = [
  "#3b82f6",
  "#22c55e",
  "#a855f7",
  "#eab308",
  "#6366f1",
  "#ec4899",
];

export default function Home() {
  return (
    <>
      <Toaster />
      <motion.main className="min-h-screen bg-black">
        <Chopped {...data} />
      </motion.main>
    </>
  );
}
