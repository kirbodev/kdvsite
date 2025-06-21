"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { IconInfoHexagonFilled, IconQuestionMark } from "@tabler/icons-react";
import Link from "next/link";

const supporters = [
  {
    name: "pou/jmoney",
    description: <span>A long time friend and supporter of mine.</span>,
    role: "Friend and Donator",
    image: "/jmoney.jpg",
  },
  {
    name: "furious",
    description: <span>Professional frenchman and a good friend of mine.</span>,
    role: "Friend and Donator",
    image: "/furious.png",
  },
  {
    name: "dunkelrot",
    description: (
      <span>
        Developer, owner of Crimson Rose Studios. Helped me with pomegranate!
      </span>
    ),
    role: "Developer",
    image: "/dunkelrot.png",
  },
  {
    name: "You",
    description: (
      <span>Thank you for supporting me by visiting this website!</span>
    ),
    role: "Supporter",
    image: null,
  },
];
export default function SupporterList() {
  const [activeSupporter, setActiveSupporter] = useState(0);

  return (
    <div className="container flex flex-col justify-center rounded-3xl bg-foreground p-6 text-background transition-colors">
      <h2 className="text-5xl font-bold">Supporters</h2>
      <span className="mt-2 text-muted dark:text-muted-foreground">
        These are people who have supported me in some way, whether it be
        through code, donations, or just being there for me. Thank you!
      </span>
      <Alert className="mt-4">
        <IconInfoHexagonFilled className="size-4" />
        <AlertTitle>How do I get here?</AlertTitle>
        <AlertDescription>
          If you want to be featured here, consider{" "}
          <Link
            href="/donate"
            target="_blank"
            className="text-accent transition-all hover:brightness-125"
          >
            donating
          </Link>{" "}
          or{" "}
          <Link
            href="https://github.com/kirbodev"
            target="_blank"
            className="font-semibold"
          >
            contributing
          </Link>{" "}
          to my projects, and{" "}
          <Link href="#contact" className="font-semibold">
            contact me
          </Link>{" "}
          to let me know!
        </AlertDescription>
      </Alert>
      <div className="mt-6 w-full gap-8 md:flex">
        <div className="min-h-96 max-w-80 flex-1 rounded-3xl bg-background p-6 text-foreground">
          <AnimatePresence mode="popLayout">
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={supporters[activeSupporter].name}
            >
              {supporters[activeSupporter].image ? (
                <Image
                  src={supporters[activeSupporter].image}
                  width={1920}
                  height={1080}
                  alt=""
                  className="aspect-video rounded-2xl object-cover"
                />
              ) : (
                <div className="aspect-video w-full rounded-2xl bg-white" />
              )}
              <h1 className="mb-1 mt-2 text-3xl font-semibold">
                {supporters[activeSupporter].name}
              </h1>
              {supporters[activeSupporter].description}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex w-full flex-1 flex-col justify-center gap-2 md:mt-0">
          {supporters.map((supporter, index) => (
            <SupporterItem
              key={supporter.name}
              name={supporter.name}
              role={supporter.role}
              index={index}
              activeSupporter={activeSupporter}
              setIndex={(index) => setActiveSupporter(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const SupporterItem = ({
  name,
  role,
  index,
  activeSupporter,
  setIndex,
}: {
  name: string;
  role: string;
  index: number;
  activeSupporter: number;
  setIndex: (index: number) => void;
}) => {
  return (
    <div
      className={`flex items-center justify-between rounded-lg p-2 ring-offset-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${activeSupporter === index ? "bg-gray-900 dark:bg-gray-200" : "bg-none"}`}
      onMouseOver={() => setIndex(index)}
      onFocus={() => setIndex(index)}
      tabIndex={0}
    >
      <span className="text-xl font-semibold">{name}</span>
      <span className="text-right text-muted-foreground">{role}</span>
    </div>
  );
};
