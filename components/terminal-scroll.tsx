"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconCornerDownLeft,
  IconBrandWindows,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import { choco } from "@/styles/fonts";
import Terminal from "./terminal";

export const MacbookScroll = ({
  showGradient,
  title,
  badge,
}: {
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end -20%"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, 1.5]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 2250]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 flex-col items-center justify-start bg-[linear-gradient(to_bottom,hsl(var(--background)),#e4e6ea44),radial-gradient(at_center_bottom,hsl(var(--background)),#e4e6ea)] py-0 [perspective:800px] dark:bg-[linear-gradient(to_bottom,hsl(var(--background)),#07070744),radial-gradient(at_center_bottom,hsl(var(--background)),#070707)] sm:min-h-[200vh] md:pb-80"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-20 text-center text-3xl font-bold text-neutral-800 dark:text-white"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      <div className="scale-[0.4] sm:scale-50 md:scale-75 lg:scale-100">
        {/* Lid */}
        <Lid
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
        {/* Base area */}
        <div className="relative -z-10 h-[26rem] w-[682px] overflow-hidden rounded-2xl bg-gray-200 drop-shadow-[0_0px_8px_rgb(0_0_0/0.25)] dark:bg-[#272729]">
          {/* above keyboard bar */}
          <div className="relative h-10 w-full">
            <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
          </div>
          <div className="relative flex">
            <div className="mx-auto h-full w-[10%]  overflow-hidden">
              <SpeakerGrid />
            </div>
            <div className="mx-auto h-full w-[60%]">
              <Keypad />
            </div>
            <div className="mx-auto h-full w-[10%]  overflow-hidden">
              <SpeakerGrid />
            </div>
          </div>
          <Trackpad />
          <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-t-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
          {showGradient && (
            <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
          )}
          {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
        </div>
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
}: {
  scaleX?: MotionValue<number>;
  scaleY?: MotionValue<number>;
  rotate?: MotionValue<number>;
  translate?: MotionValue<number>;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[682px] rounded-2xl p-2 drop-shadow-[0_0px_8px_rgb(0_0_0/0.5)]"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <span className={`${choco.className}`}>
              kdv<span className="text-primary">_</span>
            </span>
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX || 1,
          scaleY: scaleY || 1,
          rotateX: rotate || 0,
          translateY: translate || 0,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 mx-12 h-96 rounded-2xl p-2 xs:mx-10 sm:mx-0"
      >
        <div className="absolute inset-0 rounded-lg" />
        <div className="absolute inset-0 size-full">
          <Terminal className="px-6 pt-12 [--size:12px] [font-size:12px]" />
        </div>
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="mx-auto mb-1 mt-8 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full rounded-md bg-[#050505] p-1">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          Esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="size-[6px]" />
          <span className="mt-1 inline-block">F1</span>
        </KBtn>

        <KBtn>
          <IconBrightnessUp className="size-[6px]" />
          <span className="mt-1 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="size-[6px]" />
          <span className="mt-1 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="size-[6px]" />
          <span className="mt-1 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="size-[6px]" />
          <span className="mt-1 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="size-[6px]" />
          <span className="mt-1 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="size-[6px]" />
          <span className="mt-1 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="size-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="size-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="size-[6px]" />
          <span className="mt-1 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="size-[6px]" />
          <span className="mt-1 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="size-[6px]" />
          <span className="mt-1 inline-block">F12</span>
        </KBtn>
        <KBtn
          className="items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          <span className="mt-1 inline-block">Del</span>
        </KBtn>
      </Row>

      {/* Second row */}
      <Row>
        <KBtn childrenClassName="items-start">
          <span className="block pl-[4px]">¬</span>
          <div className="flex w-full justify-between px-1">
            <span className="mt-1.5 block">`</span>
            <span className="mt-1 block">¦</span>
          </div>
        </KBtn>

        <KBtn>
          <span className="block ">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">&ldquo;</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">£</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">€</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn
          className="w-10 items-end justify-end pb-[2px] pr-[4px]"
          childrenClassName="items-end"
        >
          backspace
        </KBtn>
      </Row>

      {/* Third row */}
      <Row>
        <KBtn
          className="w-[36px] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn>
          <span className="block">Q</span>
        </KBtn>

        <KBtn>
          <span className="block">W</span>
        </KBtn>
        <KBtn>
          <span className="block">E</span>
        </KBtn>
        <KBtn>
          <span className="block">R</span>
        </KBtn>
        <KBtn>
          <span className="block">T</span>
        </KBtn>
        <KBtn>
          <span className="block">Y</span>
        </KBtn>
        <KBtn>
          <span className="block">U</span>
        </KBtn>
        <KBtn>
          <span className="block">I</span>
        </KBtn>
        <KBtn>
          <span className="block">O</span>
        </KBtn>
        <KBtn>
          <span className="block">P</span>
        </KBtn>
        <KBtn>
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>
        <KBtn className="w-[28px] rounded-bl-[2px] rounded-br-none">
          <IconCornerDownLeft className="size-2" />
        </KBtn>
      </Row>

      {/* Fourth Row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          caps lock
        </KBtn>
        <KBtn>
          <span className="block">A</span>
        </KBtn>

        <KBtn>
          <span className="block">S</span>
        </KBtn>
        <KBtn>
          <span className="block">D</span>
        </KBtn>
        <KBtn>
          <span className="block">F</span>
        </KBtn>
        <KBtn>
          <span className="block">G</span>
        </KBtn>
        <KBtn>
          <span className="block">H</span>
        </KBtn>
        <KBtn>
          <span className="block">J</span>
        </KBtn>
        <KBtn>
          <span className="block">K</span>
        </KBtn>
        <KBtn>
          <span className="block">L</span>
        </KBtn>
        <KBtn>
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`@`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`~`}</span>
          <span className="block">{`#`}</span>
        </KBtn>
        <KBtn className="mt-[-4px] h-[28px] rounded-t-none before:ml-[-2px] before:mt-[-24px] before:size-[4px] before:rounded-full before:bg-[#0A090D] before:[clip-path:polygon(0_0,100%_0,100%_100%)]"></KBtn>
      </Row>

      {/* Fifth Row */}
      <Row>
        <KBtn
          className="w-[32px] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn>
          <span className="block">|</span>
          <span className="block">\</span>
        </KBtn>
        <KBtn>
          <span className="block">Z</span>
        </KBtn>
        <KBtn>
          <span className="block">X</span>
        </KBtn>
        <KBtn>
          <span className="block">C</span>
        </KBtn>
        <KBtn>
          <span className="block">V</span>
        </KBtn>
        <KBtn>
          <span className="block">B</span>
        </KBtn>
        <KBtn>
          <span className="block">N</span>
        </KBtn>
        <KBtn>
          <span className="block">M</span>
        </KBtn>
        <KBtn>
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn>
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>{" "}
        <KBtn>
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[3.65rem] items-end justify-end pb-[2px] pr-[4px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </Row>

      {/* sixth Row */}
      <Row>
        <KBtn
          className="items-end justify-end pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          ctrl
        </KBtn>
        <KBtn
          className="items-end justify-end pb-[3px] pl-[4px]"
          childrenClassName="items-start"
        >
          <IconBrandWindows className="size-[8px]" />
        </KBtn>
        <KBtn
          className="items-end justify-end pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          alt
        </KBtn>
        <KBtn className="w-[8.2rem]"></KBtn>
        <KBtn
          className="items-end justify-end pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          alt
        </KBtn>
        <KBtn
          className="items-end justify-end pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          fn
        </KBtn>
        <KBtn
          className="items-end justify-end pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          ctrl
        </KBtn>
        <div className="mt-[2px] flex h-6 flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-[30px]">
            <IconCaretUpFilled className="size-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-3 w-[30px]">
              <IconCaretLeftFilled className="size-[6px]" />
            </KBtn>
            <KBtn className="h-3 w-[30px]">
              <IconCaretDownFilled className="size-[6px]" />
            </KBtn>
            <KBtn className="h-3 w-[30px]">
              <IconCaretRightFilled className="size-[6px]" />
            </KBtn>
          </div>
        </div>
      </Row>
    </div>
  );
};
export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-[4px] p-[0.5px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className,
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-[2px] flex w-full shrink-0 justify-center gap-[2px]">
      {children}
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};
