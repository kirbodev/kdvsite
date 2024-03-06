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
    image: "/jmoney.jpg",
  },
  {
    name: "furious",
    description: <span>Professional frenchman and a good friend of mine.</span>,
    image: "/furious.png",
  },
  {
    name: "dunkelrot",
    description: (
      <span>
        Developer, owner of Crimson Rose Studios. Helped me with pomegranate!
      </span>
    ),
    image: "/dunkelrot.png",
  },
  {
    name: "You",
    description: (
      <span>Thank you for supporting me by visiting this website!</span>
    ),
    image: "https://picsum.photos/1920/1080",
  },
];
export default function SupporterList() {
  const [activeSupporter, setActiveSupporter] = useState(supporters[0]);

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
      <div className="mt-6 flex w-full gap-8">
        <div className="min-h-96 max-w-80 flex-1 rounded-3xl bg-background p-6 text-foreground">
          <AnimatePresence mode="popLayout">
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeSupporter.name}
            >
              <Image
                src={activeSupporter.image}
                width={1920}
                height={1080}
                alt=""
                className="aspect-video rounded-2xl object-cover"
              />
              <h1 className="mb-1 mt-2 text-3xl font-semibold">
                {activeSupporter.name}
              </h1>
              {activeSupporter.description}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex w-full flex-1 flex-col justify-center gap-2">
          <div
            className={`flex items-center justify-between rounded-lg p-2 transition-colors ${activeSupporter === supporters[0] ? "bg-gray-900 dark:bg-gray-200" : "bg-none"}`}
            onMouseOver={() => setActiveSupporter(supporters[0])}
          >
            <span className="text-xl font-semibold">pou/jmoney</span>
            <span className="text-muted-foreground">Friend and Donator</span>
          </div>
          <div
            className={`flex items-center justify-between rounded-lg p-2 transition-colors ${activeSupporter === supporters[1] ? "bg-gray-900 dark:bg-gray-200" : "bg-none"}`}
            onMouseOver={() => setActiveSupporter(supporters[1])}
          >
            <span className="text-xl font-semibold">furious</span>
            <span className="text-muted-foreground">Friend and Donator</span>
          </div>
          <div
            className={`flex items-center justify-between rounded-lg p-2 transition-colors ${activeSupporter === supporters[2] ? "bg-gray-900 dark:bg-gray-200" : "bg-none"}`}
            onMouseOver={() => setActiveSupporter(supporters[2])}
          >
            <span className="text-xl font-semibold">Dunkelrot</span>
            <span className="text-muted-foreground">Developer</span>
          </div>
          <div
            className={`flex items-center justify-between rounded-lg p-2 transition-colors ${activeSupporter === supporters[3] ? "bg-gray-900 dark:bg-gray-200" : "bg-none"}`}
            onMouseOver={() => setActiveSupporter(supporters[3])}
          >
            <span className="text-xl font-semibold">You</span>
            <span className="text-muted-foreground">Supporter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
