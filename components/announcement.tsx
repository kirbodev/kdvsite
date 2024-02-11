import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { useEffect, useState } from "react";

export const announcementAtom = atomWithStorage(
  "showAnnouncement",
  true,
  createJSONStorage(() => sessionStorage),
);

export default function AnnouncementBar({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [show, setShow] = useAtom(announcementAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="origin-top overflow-hidden whitespace-nowrap bg-accent p-2 text-sm font-semibold text-foreground"
          exit={{ transform: "translateY(-100%)", height: 0 }}
        >
          <div className="align-center flex">
            <div className="flex flex-1 items-center justify-center gap-2">
              {children}
            </div>
            <button
              className="flex items-center justify-end"
              aria-label="Close"
              onClick={handleClose}
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
