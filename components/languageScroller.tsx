"use client";

import React, { useEffect, useState } from "react";
import AstroIcon from "./icons/astro";
import BootstrapIcon from "./icons/bootstrap";
import DjsIcon from "./icons/djs";
import MongoIcon from "./icons/mongo";
import NetlifyIcon from "./icons/netlify";
import NextIcon from "./icons/next";
import ReactIcon from "./icons/react";
import RedisIcon from "./icons/redis";
import TailwindIcon from "./icons/tailwind";
import TSIcon from "./icons/ts";
import VercelIcon from "./icons/vercel";
import { Badge } from "./ui/badge";

import { Progress } from "./ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const items = [
  <TooltipProvider key="astro">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <AstroIcon className="size-16 p-1 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Astro</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="bootstrap">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <BootstrapIcon className="size-16 p-1 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Bootstrap</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="djs">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <DjsIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Discord.js</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="mongo">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <MongoIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">MongoDB</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="netlify">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <NetlifyIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Netlify</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="nextjs">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <NextIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Next.js</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="react">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <ReactIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">React</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="redis">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <RedisIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Redis</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="tailwind">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <TailwindIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">TailwindCSS</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="ts">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <TSIcon className="size-16 p-1 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">TypeScript</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="vercel">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <VercelIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Vercel</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="astro2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <AstroIcon className="size-16 p-1 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Astro</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="bootstrap2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <BootstrapIcon className="size-16 p-1 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Bootstrap</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="djs2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <DjsIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Discord.js</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="mongo2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <MongoIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">MongoDB</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="netlify2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <NetlifyIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Netlify</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="nextjs2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <NextIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Next.js</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="react2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <ReactIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">React</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="redis2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <RedisIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Redis</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="tailwind2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <TailwindIcon className="size-16 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">TailwindCSS</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="ts2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <TSIcon className="size-16 p-1 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">TypeScript</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
  <TooltipProvider key="vercel2">
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <a>
          <VercelIcon className="size-16 p-2 drop-shadow-lg" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top">Vercel</TooltipContent>
    </Tooltip>
  </TooltipProvider>,
];

export default function LanguageScroller() {
  const animateRef = React.createRef<HTMLDivElement>();

  const tl = gsap.timeline();

  useGSAP((gsap) => {
    tl.to(animateRef.current, {
      x: "-50%",
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  });

  const onHoverStart = () => {
    tl.timeScale(0.5);
  };

  const onHoverEnd = () => {
    tl.timeScale(1);
  };

  return (
    <div className="flex size-full justify-center">
      <div className="overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div
          className="my-12 flex w-max flex-nowrap"
          ref={animateRef}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          onTouchStart={onHoverStart}
          onTouchEnd={onHoverEnd}
        >
          {items.map((item, index) => (
            <div key={`infinite-${index}`} className="z-50 mx-4 sm:mx-8">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
