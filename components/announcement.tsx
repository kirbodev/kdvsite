"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { useEffect, useState } from "react";

export const announcementAtom = atomWithStorage(
  "showAnnouncement",
  true,
  createJSONStorage(() => localStorage),
);

export default function AnnouncementBar({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [show, setShow] = useAtom(announcementAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          className="origin-top overflow-hidden whitespace-nowrap bg-gradient-to-br from-primary to-accent p-2 text-sm font-semibold text-foreground"
          exit={{ transform: "translateY(-100%)", scale: 0, height: 0 }}
        >
          <div className="flex">
            <div className="flex flex-1 items-center justify-center gap-2 text-white">
              {children}
            </div>
            <button
              className="flex items-center justify-end rounded-sm ring-offset-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              aria-label="Close"
              onClick={handleClose}
            >
              <X size={16} className="text-white" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
