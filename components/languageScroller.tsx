"use client";

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

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Progress } from "./ui/progress";

export default function LanguageScroller() {
  return (
    <>
      <div className="mx-6 flex h-16 w-full justify-center gap-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <AstroIcon className="size-16 p-1 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-2">
              <span className="font-bold">Astro</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Framework
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Astro is a new kind of static site builder that delivers
                lightning fast performance, and modern developer experiences.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={90} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <BootstrapIcon className="size-16 p-1 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-2">
              <span className="font-bold">Bootstrap</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Framework
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={60} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <DjsIcon className="size-16 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">Discord.js</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Library
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Discord.js is a library used for creating Discord bots.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={90} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <MongoIcon className="size-16 p-2 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">MongoDB/Mongoose</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                DB
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                MongoDB is a general purpose, document-based database built for
                modern developers and for the cloud era.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={70} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <NetlifyIcon className="size-16 p-2 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">Netlify</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Platform
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Netlify is a platform that builds, deploys, and hosts your
                front-end applications or sites.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={75} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <NextIcon className="size-16 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">NextJS</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Framework
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Next.js is a React framework for production.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={20} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <ReactIcon className="size-16 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">React</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Framework
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                React is a JavaScript library for building user interfaces.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={20} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <RedisIcon className="size-16 p-2 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">Redis</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                DB
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Redis is an open source, in-memory data structure store, used as
                a database, cache, and message broker.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={50} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <TailwindIcon className="size-16 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">TailwindCSS</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Framework
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Tailwind CSS is a utility-first CSS framework for rapidly
                building custom designs.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={85} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <TSIcon className="size-16 p-1 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">TypeScript</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Language
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                TypeScript is a superset of JavaScript with types that compiles
                to plain JavaScript.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={80} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a>
              <VercelIcon className="size-16 p-2 drop-shadow-lg" />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <div className="flex flex-col space-y-1">
              <span className="font-bold">Vercel</span>
              <Badge variant="secondary" className="w-fit text-[10px]">
                Platform
              </Badge>
              <p className="text-xs text-secondary-foreground/[0.8]">
                Vercel is a cloud platform for static sites and Serverless
                Functions.
              </p>
              <div>
                <span className="text-sm font-semibold">Experience</span>
                <Progress value={50} className="mt-1" />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="mt-4 flex justify-center">
        <span className="text-muted-foreground">
          P.S: Hover on one of the logos to find out more!
        </span>
      </div>
    </>
  );
}
