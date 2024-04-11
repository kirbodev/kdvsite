"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowLeft,
  IconBrandMysql,
  IconChevronDown,
  IconCirclePlus,
  IconClockFilled,
  IconDatabase,
  IconDevices,
  IconDots,
  IconExclamationCircle,
  IconFileCode,
  IconHash,
  IconInfoCircle,
  IconMoodSmileFilled,
  IconReload,
  IconServerBolt,
  IconSparkles,
} from "@tabler/icons-react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { IconRobotFace } from "@tabler/icons-react";
import LogosRedis from "./icons/redis";
import LogosMongodbIcon from "./icons/mongo";
import { Lid } from "./ui/macbook";
import { Skeleton } from "./ui/skeleton";
import { choco } from "@/styles/fonts";
import { Button } from "./ui/button";
import Link from "next/link";

export function BentoGridInfo() {
  return (
    <BentoGrid className="mx-auto max-w-4xl px-2 md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
      <GradientSVG />
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      whileFocus="animate"
      whileTap="animate"
      className="flex size-full min-h-[6rem] flex-1 select-none flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      tabIndex={0}
    >
      <motion.div
        variants={variants}
        className="mr-auto flex flex-row items-center space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <LogosMongodbIcon className="size-6 shrink-0 rounded-full" />
        <p className="text-xs text-neutral-500">
          Yall ever heard the one about the unstructured data?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex flex-row items-center space-x-2 rounded-2xl border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Nope, punchline never got cached.
        </p>
        <LogosRedis className="size-6 shrink-0 rounded-full" />
      </motion.div>
      <motion.div
        variants={variants}
        className="ml-auto flex flex-row items-center space-x-2 rounded-2xl border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          At least I&apos;m keeping it all in order.
        </p>
        <IconBrandMysql className="size-6 shrink-0 rounded-full" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      whileFocus="hover"
      whileTap="hover"
      className="group/server flex size-full min-h-[6rem] flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      tabIndex={0}
    >
      <div className="flex size-full items-center justify-center">
        <div className="flex size-full items-center justify-center">
          <div className="mt-6 rounded-2xl border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black">
            <IconDevices className="size-8 text-neutral-500 transition-colors duration-200 group-hover/server:text-neutral-300 group-focus-visible/server:text-neutral-300" />
          </div>
          <div className="relative h-[26px] w-1/2">
            <motion.div
              className="absolute inset-0 z-10 flex h-[26px] w-full"
              variants={{
                initial: {
                  clipPath: "inset(0% 100% 0% 0%)",
                },
                hover: {
                  clipPath: "inset(0% 0% 0% 0%)",
                  transition: {
                    duration: 0.25,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              <div className="mt-6 h-0.5 w-[calc(50%-1px)] bg-amber-500 transition-colors" />
              <div className="h-[26px] w-0.5 bg-amber-500 transition-colors" />
              <div className="mb-6 h-0.5 w-[calc(50%-1px)] bg-amber-500 transition-colors" />
            </motion.div>
            <div className="absolute inset-0 flex h-[26px] w-full">
              <div className="mt-6 h-0.5 w-[calc(50%-1px)] bg-neutral-600 transition-colors" />
              <div className="h-[26px] w-0.5 bg-neutral-600 transition-colors" />
              <div className="mb-6 h-0.5 w-[calc(50%-1px)] bg-neutral-600 transition-colors" />
            </div>
          </div>
          <div className="mb-6 rounded-2xl border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black">
            <IconServerBolt className="size-8 text-neutral-500 transition-colors duration-200 group-hover/server:text-neutral-300 group-focus-visible/server:text-neutral-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      translateY: "150%",
    },
    hover: {
      translateY: "0%",
      transition: {
        duration: 0.75,
        ease: "backInOut",
      },
    },
    animate: {
      translateY: "150%",
      transition: {
        duration: 0.75,
        ease: "backInOut",
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileFocus="hover"
      whileTap="hover"
      className="flex size-full min-h-[6rem] flex-1 items-center justify-center rounded-lg p-4 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      tabIndex={0}
    >
      <Lid
        imageClassName="[&>div]:[transform:none!important]"
        className="size-full"
      >
        <div className="flex aspect-video size-full flex-col rounded-md border-2 bg-slate-900 min-[470px]:size-auto md:size-full">
          <div className="relative my-1 flex h-3 w-full flex-col">
            <div className="flex">
              <div className="absolute top-1/2 ml-1 flex -translate-y-1/2 space-x-2">
                <div className="size-2 rounded-full bg-red-500"></div>
                <div className="size-2 rounded-full bg-yellow-500"></div>
                <div className="size-2 rounded-full bg-lime-500"></div>
              </div>
              <span className="m-auto -mt-px text-xs text-neutral-200">
                Discord
              </span>
              <IconDots className="absolute right-0 top-1/2 mr-1 flex size-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          <div className="flex size-full overflow-hidden rounded-b-sm bg-slate-700">
            <div className="w-[10%] overflow-y-hidden rounded-bl-sm bg-slate-900">
              <div className="flex flex-1 flex-col items-center gap-y-1 overflow-hidden pt-0.5">
                {new Array(25).fill(0).map((_, i) => (
                  <Skeleton
                    key={"skeleton" + i}
                    className="size-3 rounded-full bg-slate-400"
                  ></Skeleton>
                ))}
              </div>
            </div>
            <div className="w-[25%] overflow-y-hidden bg-slate-900">
              <div className="size-full rounded-tl-sm bg-slate-800">
                <div className="flex flex-1 flex-col overflow-hidden">
                  <div className="flex h-3 w-full items-center justify-between border-b-[1px] border-slate-900 px-1">
                    <span className="text-[8px] font-semibold text-slate-100">
                      kdv_
                    </span>
                    <IconChevronDown className="size-2 text-slate-100" />
                  </div>
                  <div className="flex flex-col gap-y-0.5 p-0.5">
                    {new Array(10).fill(0).map((_, i) => (
                      <div
                        className="h-2.5 w-full flex-1 rounded-sm transition-colors hover:bg-slate-700"
                        key={"skeleton" + i}
                      >
                        <div className="flex h-full select-none items-center gap-1 px-0.5 text-slate-400">
                          <span className="text-[10px]">#</span>
                          <Skeleton
                            className="h-2"
                            style={{
                              width: Math.random() * (100 - 40) + 40 + "%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[65%] rounded-br-sm bg-slate-700">
              <div className="relative flex size-full flex-col-reverse gap-y-1 p-1">
                <div className="absolute bottom-0 left-0 z-10 h-[calc(7.5%+6px)] w-full bg-slate-700" />
                <div className="relative flex h-[7.5%] w-full flex-col">
                  <div className="absolute left-0 top-0 -mt-16 flex h-[58px] w-full">
                    <motion.div
                      className="flex size-full translate-y-full rounded-sm bg-[rgb(41_55_75)] drop-shadow"
                      variants={variants}
                    >
                      <div className="h-full w-1/12 overflow-y-hidden rounded-l-sm bg-slate-800">
                        <div className="flex flex-1 flex-col items-center gap-y-1 overflow-hidden pt-0.5">
                          <IconClockFilled className="size-2 rounded-full text-slate-200" />
                          <Image
                            src="/pomegranate.png"
                            width="8"
                            height="8"
                            alt="Pomegranate"
                          />
                          {new Array(10).fill(0).map((_, i) => (
                            <Skeleton
                              key={"skeleton" + i}
                              className="size-2 rounded-full bg-slate-400"
                            ></Skeleton>
                          ))}
                        </div>
                      </div>
                      <div className="size-full select-none overflow-hidden p-1">
                        <div className="flex gap-x-0.5">
                          <IconClockFilled className="size-[5px] text-slate-300" />
                          <span className="text-[5px] font-semibold text-slate-300">
                            FREQUENTLY USED
                          </span>
                        </div>
                        <div className="flex flex-col gap-y-0.5 p-0.5">
                          <div className="size-full flex-1">
                            <div className="flex h-full items-center gap-1 rounded-sm p-0.5 text-slate-400">
                              <Image
                                src="/pomegranate.png"
                                width="8"
                                height="8"
                                alt="Pomegranate"
                              />
                              <div className="flex flex-1 flex-col">
                                <span className="text-[4px] font-semibold text-slate-100">
                                  /say
                                </span>
                                <span className="text-[4.5px] text-slate-300">
                                  Say something
                                </span>
                              </div>
                            </div>
                            <div className="flex h-full items-center gap-1 rounded-sm p-0.5 text-slate-400">
                              <Image
                                src="/pomegranate.png"
                                width="8"
                                height="8"
                                alt="Pomegranate"
                              />
                              <div className="flex flex-1 flex-col">
                                <span className="text-[4px] font-semibold text-slate-100">
                                  /warn
                                </span>
                                <span className="text-[4.5px] text-slate-300">
                                  Warn someone
                                </span>
                              </div>
                            </div>
                            <div className="flex h-full items-center gap-1 rounded-sm p-0.5 text-slate-400">
                              <Image
                                src="/pomegranate.png"
                                width="8"
                                height="8"
                                alt="Pomegranate"
                              />
                              <div className="flex flex-1 flex-col">
                                <span className="text-[4px] font-semibold text-slate-100">
                                  /ban
                                </span>
                                <span className="text-[4.5px] text-slate-300">
                                  Ban someone
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="z-10 flex size-full select-none items-center gap-x-1 rounded-sm bg-slate-600 px-1 py-0.5 text-slate-400">
                    <IconCirclePlus className="h-full w-auto" />
                    <span className="flex text-[7px]">
                      Message #
                      <Skeleton className="my-auto ml-px h-1.5 w-6" />
                    </span>
                    <IconMoodSmileFilled className="ml-auto h-full w-auto" />
                  </div>
                </div>
                <div className="flex h-[90%] flex-col-reverse">
                  <div className="flex h-28 flex-col">
                    <div className="flex h-5 w-full flex-1">
                      <div className="size-5 rounded-full bg-slate-800"></div>
                      <div className="ml-1 flex flex-col">
                        <span className="text-[7px] font-semibold text-slate-100">
                          Ben
                        </span>
                        <span className="text-[8px] text-slate-200">Hey!</span>
                      </div>
                    </div>
                    <div className="flex h-5 w-full flex-1">
                      <div className="size-5 rounded-full bg-slate-800"></div>
                      <div className="ml-1 flex flex-col">
                        <span className="text-[7px] font-semibold text-slate-100">
                          Ben
                        </span>
                        <span className="text-[8px] text-slate-200">Wsg!</span>
                      </div>
                    </div>
                    <div className="flex h-5 w-full flex-1">
                      <div className="size-5 rounded-full bg-slate-800"></div>
                      <div className="ml-1 flex flex-col">
                        <span className="text-[7px] font-semibold text-slate-100">
                          Ben
                        </span>
                        <span className="text-[8px] text-slate-200">
                          Why are we all called Ben?
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 mt-3 h-px w-full rounded-sm bg-slate-600"></div>
                  <div className="ml-2 flex flex-col">
                    <IconHash className="mb-1 size-8 rounded-full bg-slate-600 p-1" />
                    <span className="font-bold text-slate-100">
                      Welcome to #kdv!
                    </span>
                    <span className="text-[8px] text-slate-400">
                      This is the start of the #kdv channel.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Lid>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  const variantsError = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="relative flex size-full gap-x-8 p-1 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileFocus="hover"
      whileTap="hover"
      tabIndex={0}
    >
      <div className="relative flex size-full h-52 scale-[0.45] select-none flex-col justify-center gap-x-8 p-1 xs:scale-[0.4] sm:h-48 sm:min-h-6 sm:scale-[0.6] sm:flex-row">
        <Lid imageClassName="[transform:rotateX(-15deg)] sm:[transform:rotateY(15deg)]">
          <div className="flex size-full flex-col rounded-md border-2 border-slate-500 bg-foreground">
            <div className="relative flex h-4 w-full flex-col justify-center rounded-t-sm bg-slate-300">
              <div className="-mt-px flex">
                <div className="my-auto mr-1 flex space-x-1">
                  <IconArrowLeft className="size-3 text-slate-500" />
                  <IconReload className="size-3 text-slate-500" />
                </div>
                <div className="my-auto flex h-3 w-full items-center space-x-1 rounded-lg bg-slate-400 px-1 text-black">
                  <IconInfoCircle className="size-2.5" />
                  <span className="text-[8px]">localhost:3000</span>
                </div>
                <IconDots className="mx-1 size-4 text-slate-500" />
              </div>
            </div>
            <div className="h-px w-full bg-slate-700"></div>
            <div className="relative size-full bg-grid-small-white/[0.2] dark:bg-grid-small-black/[0.2]">
              <main className="flex min-h-full flex-col items-center justify-between text-background">
                <div className="mx-auto flex flex-col items-center gap-1">
                  <h1 className={`${choco.className} text-3xl font-black`}>
                    kdv
                    <span className="text-primary">_</span>
                  </h1>
                  <span className="max-w-[70%] text-center text-[6px]">
                    Hey there! I&apos;m a software engineer based in Dublin.
                    Full-stack. Typescript/Node.js. Open-source.
                  </span>
                  <div className="mt-1 flex gap-2">
                    <Button
                      variant="default"
                      asChild
                      className="h-5 px-1.5 text-[5px]"
                      tabIndex={1}
                    >
                      <span>View Projects</span>
                    </Button>
                    <Button
                      variant="secondary"
                      asChild
                      className="h-5 px-1.5 text-[5px]"
                      tabIndex={1}
                    >
                      <span>Contact me</span>
                    </Button>
                  </div>
                </div>
              </main>
              <motion.div
                className="absolute bottom-0 left-0 mb-0.5 ml-0.5 flex h-4 w-10 items-center rounded-sm bg-red-500 px-0.5 text-white"
                variants={variantsError}
              >
                <IconExclamationCircle className="mr-0.5 size-2" />
                <span className="text-[6px]">3 errors</span>
              </motion.div>
            </div>
          </div>
        </Lid>
        <Lid imageClassName="[transform:rotateX(15deg)] sm:[transform:rotateY(-15deg)]">
          <div className="flex size-full flex-col rounded-md border-2 border-slate-700 bg-slate-900">
            <div className="relative my-1 flex h-3 w-full flex-col">
              <div className="flex">
                <div className="absolute top-1/2 ml-1 flex -translate-y-1/2 space-x-2">
                  <div className="size-2 rounded-full bg-red-500"></div>
                  <div className="size-2 rounded-full bg-yellow-500"></div>
                  <div className="size-2 rounded-full bg-lime-500"></div>
                </div>
                <span className="m-auto -mt-px text-xs text-neutral-500">
                  Code
                </span>
                <IconDots className="absolute right-0 top-1/2 mr-1 flex size-4 -translate-y-1/2 text-slate-500" />
              </div>
            </div>
            <div className="h-px w-full bg-slate-700"></div>
            <div className="relative size-full whitespace-normal break-words px-2 pt-1 text-[12px]">
              <span className="block text-white">
                export default function Main() {"{"} <br />
                <span className="ml-4">return {"("}</span> <br />
                <motion.div
                  variants={variants}
                  className="mb-1.5 ml-6 h-2 max-w-32 rounded-sm bg-slate-800"
                />{" "}
                <motion.div
                  variants={variants}
                  className="mb-1 ml-6 h-2 max-w-24 rounded-sm bg-slate-800"
                />
                <span className="ml-4">{")"};</span> <br />
                {"}"};
              </span>
            </div>
          </div>
        </Lid>
      </div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      whileFocus="animate"
      whileTap="animate"
      className="flex size-full min-h-[6rem] flex-1 select-none flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
      tabIndex={0}
    >
      <div className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.2] dark:bg-black">
        <Image
          src="/kdv_circle.png"
          alt="avatar"
          height="100"
          width="100"
          className="size-10 rounded-full"
        />
        <p className="text-xs text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eos
          mollitia doloremque pariatur...
        </p>
      </div>
      <div className="ml-auto flex flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black">
        <div className="relative">
          <motion.div
            variants={{
              initial: {
                opacity: 1,
              },
              animate: {
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            className="absolute left-0 top-0"
          >
            <Skeleton>
              <motion.p className="invisible text-xs">Are you okay?</motion.p>
            </Skeleton>
          </motion.div>
          <motion.p
            className="text-xs text-neutral-500"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            Are you okay?
          </motion.p>
        </div>
        <div className="shrink-0">
          <IconSparkles className="size-6 stroke-[url(#gradient)]" />
        </div>
      </div>
    </motion.div>
  );
};
const items = [
  {
    title: "Multiple DBs",
    description: (
      <span className="text-sm">
        Experience with multiple databases like MongoDB, Redis and MySQL. Also,
        ORMs like Prisma.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconDatabase className="size-4 text-neutral-500" />,
  },
  {
    title: "Discord Bots",
    description: (
      <span className="text-sm">
        Lots of experience with Discord.js and building bots for large Discord
        servers.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconRobotFace className="size-4 text-neutral-500" />,
  },
  {
    title: "AI",
    description: (
      <span className="text-sm">
        Experience with the Google Gemini and ChatGPT APIs and excited to build
        more!
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconSparkles className="size-4 text-neutral-500" />,
  },
  {
    title: "Frontend Frameworks",
    description: (
      <span className="text-sm">
        Experience with React, Next.js, Astro and Tailwind CSS. Also, a little
        bit of Vue.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2 items-center",
    icon: <IconFileCode className="size-4 text-neutral-500" />,
  },

  {
    title: "Backend",
    description: (
      <span className="text-sm">
        Experience with Node.js, Express, and building RESTful APIs. Also, have
        experience shipping with multiple cloud providers like Vercel and
        Netlify.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconServerBolt className="size-4 text-neutral-500" />,
  },
];

const GradientSVG = () => {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <linearGradient id="gradient">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f87171" />
      </linearGradient>
    </svg>
  );
};
