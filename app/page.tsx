"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Cursor from "@/components/cursor";
import { choco } from "@/styles/fonts";
import { CopyleftIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GrainFilter from "@/components/grainFilter";
import LanguageScroller from "@/components/languageScroller";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import ContactForm from "@/components/contactForm";
import { MacbookScroll } from "@/components/terminal-scroll";
import {
  IconBrandDiscord,
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconCoffee,
  IconCopy,
} from "@tabler/icons-react";
import SupporterList from "@/components/supporterList";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import DiscordDialog from "@/components/discordDialog";
import Terminal from "@/components/terminal";
import { BentoGridInfo } from "@/components/bentoInfo";
import ProjectCarousel from "@/components/projectCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "bottom 90%",
        toggleActions: "play reverse complete reverse",
      },
    });
    tl.to("#projects", { y: -60, duration: 1, ease: "power2.inOut" });
    tl.to(
      "#projects-light",
      { opacity: 0.5, scale: 1.5, duration: 1, ease: "power2.inOut" },
      "<",
    );
  });

  return (
    <>
      <Cursor />
      <Navbar />
      <div className="absolute inset-0 -z-10 h-screen bg-repeat bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
      <main
        className="mx-6 flex min-h-screen flex-col items-center justify-between sm:mx-24"
        id="main"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1
            className={`${choco.className} text-9xl font-black sm:text-[10rem]`}
          >
            kdv
            <span className="text-primary">_</span>
          </h1>
          <span className="max-w-xl text-center text-lg sm:text-xl">
            Hey there! I&apos;m a software engineer based in Dublin. Full-stack.
            Typescript/Node.js. Open-source.
          </span>
          <div className="mt-8 flex gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>
        </div>
      </main>
      <div className="w-full overflow-hidden bg-white dark:bg-[#1B1B1F]">
        <div className="hidden md:block">
          <MacbookScroll
            title={
              <span>
                Try out the{" "}
                <span className={`${choco.className}`}>
                  kdv<span className="text-primary">_</span>
                </span>{" "}
                terminal!{" "}
              </span>
            }
            showGradient={false}
          />
        </div>
      </div>
      <div className="mx-4 sm:mx-8 md:hidden">
        <Terminal />
      </div>
      <section className="container mb-24 mt-48 px-4 sm:px-20">
        <LanguageScroller />
        <div className="mt-4 flex justify-center">
          <span className="text-center text-sm text-muted-foreground sm:text-base">
            P.S: Hover on one of the logos to find out more!
          </span>
        </div>
      </section>
      <BentoGridInfo />
      <div
        style={{
          width: "100%",
          height: "400px",
          marginBottom: "-400px",
          background:
            "conic-gradient(from 90deg at 60% 50%, hsl(var(--background)), hsl(var(--accent))), conic-gradient(from 270deg at 40% 50%, hsl(var(--accent)), hsl(var(--background)))",
          maskImage: "radial-gradient(100% 50%, black, transparent)",
          backgroundPositionX: "1%, 99%",
          backgroundSize: "50% 100%, 50% 100%",
          backgroundRepeat: "no-repeat",
          transform: "rotate(180deg)",
          opacity: 0.1,
        }}
        className="after:absolute after:inset-[0px_0px_50%] after:overflow-hidden after:opacity-25 after:[filter:url('#grainFilter')] after:[mask-image:radial-gradient(300px_50%_at_50%_100%,black,transparent)]"
        id="projects-light"
      />
      <section className="container mt-[400px] flex flex-col items-center px-4 sm:px-16 xl:px-8">
        <h2
          className="-mb-10 scroll-mt-[50vh] text-7xl font-bold sm:text-8xl md:text-9xl"
          id="projects"
        >
          Projects
        </h2>
        <ProjectCarousel />
      </section>
      <section id="contact" className="mx-0 sm:mx-12">
        <div className="container mt-48">
          <h2 className="text-5xl font-bold">Contact</h2>
          <span className="text-muted-foreground">Want to get in touch?</span>
          <Alert className="mt-4">
            <IconBrandDiscordFilled className="h-4 w-auto" />
            <AlertTitle>Discord</AlertTitle>
            <AlertDescription>
              You can also contact me by adding me on Discord at{" "}
              <code className="select-all rounded bg-gray-300 p-1 font-semibold dark:bg-gray-900">
                @kdv_
              </code>
              .
              <Button
                variant="secondary"
                className="absolute right-0 top-0 mr-2 mt-2 h-6 p-1 px-2 sm:h-10 sm:px-3"
                onClick={() => {
                  navigator.clipboard.writeText("@kdv_");
                  // The toaster is inside of ContactForm
                  toast("Copied to clipboard!", {
                    closeButton: true,
                    duration: 3000,
                  });
                }}
              >
                <IconCopy className="size-2 sm:size-4" />
              </Button>
            </AlertDescription>
          </Alert>
          <ContactForm className="mt-4" />
        </div>
      </section>
      <section className="mx-6 mt-48 md:mx-32">
        <SupporterList />
      </section>
      <section className="mt-16">
        <div className="container flex justify-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/donate" target="_blank">
                  <IconCoffee className="size-8 transition-colors hover:text-accent" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Donate 💖</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://github.com/kirbodev" target="_blank">
                  <IconBrandGithub className="size-8 transition-colors hover:text-accent" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DiscordDialog>
            <IconBrandDiscord className="size-8 transition-colors hover:text-accent" />
          </DiscordDialog>
        </div>
      </section>
      <footer className="mt-16 flex h-24 w-full items-center justify-center border-t-[1px] border-muted/50 bg-background/60">
        <span className="mx-8 text-center text-sm text-muted-foreground">
          <CopyleftIcon className="inline size-4" /> {new Date().getFullYear()}{" "}
          kdv_. MIT License. Built with Next.js. Find the source code on{" "}
          <a
            href="https://github.com/kirbodev/kdvsite"
            target="_blank"
            rel="noopener noreferrer"
            className="brightness-125 transition-colors duration-500 hover:text-accent"
          >
            GitHub
          </a>
          .
        </span>
      </footer>
      <GrainFilter />
    </>
  );
}
