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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LanguageScroller from "@/components/languageScroller";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import ContactForm from "@/components/contactForm";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import {
  IconBrandDiscordFilled,
  IconClipboardCopy,
  IconExternalLink,
} from "@tabler/icons-react";
import SupporterList from "@/components/supporterList";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconInfoHexagonFilled } from "@tabler/icons-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "bottom 80%",
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
            className={`group/main-title ${choco.className} text-9xl font-black sm:text-[10rem]`}
          >
            kdv
            <span className="duration-250 text-primary group-hover/main-title:animate-pulse">
              _
            </span>
          </h1>
          <span className="max-w-xl text-center text-lg sm:text-xl">
            Hey there! I&apos;m a software engineer based in Dublin. Full-stack.
            Typescript/Node.js. Open-source.
          </span>
          <div className="mt-8 flex gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="secondary" size="lg">
              Contact me
            </Button>
          </div>
        </div>
        {/* <div className="container drop-shadow-[drop-shadow(0_10px_8px_hsl(var(--accent)/0.1))_drop-shadow(0_4px_3px_hsl(var(--accent)/0.4))] [perspective:2000px]">
          <Terminal className="[--size:18px] [font-size:18px]" />
        </div> */}
      </main>
      <div className="w-full overflow-hidden bg-white dark:bg-[#1B1B1F]">
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
      <section className="mt-48">
        <LanguageScroller />
      </section>
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
      <section className="mt-[400px] flex flex-col items-center">
        <h2
          className="-mb-10 scroll-mt-[50vh] text-9xl font-bold"
          id="projects"
        >
          Projects
        </h2>
        <div className="z-10 aspect-video w-[1000px] rounded-lg border-2 border-foreground/5 drop-shadow-[0px_-15px_10px_#00000044] dark:drop-shadow-[0px_-15px_10px_#000000dd]">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="size-full">
                <div className="size-full rounded-lg bg-[url('/pomegranatebanner.png')] bg-cover bg-center">
                  <div className="aspect-video p-6 text-white">
                    <span className="text-4xl font-semibold shadow-black/[0.2] text-shadow">
                      Pomegranate
                    </span>
                    <p className="my-2 shadow-black/[0.4] text-shadow">
                      <strong className="font-semibold">Pomegranate</strong> is
                      a custom discord bot used to moderate and keep safe{" "}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="font-semibold underline shadow-black/[0.4] text-shadow">
                              lemomeme
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>100k+ members</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{" "}
                      and{" "}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <span className="font-semibold underline shadow-black/[0.4] text-shadow">
                              House of VOX
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>15k+ members</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      . Together, these servers have over 115k members.
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="drop-shadow-md"
                      >
                        <Link
                          href="https://discord.gg/memenade"
                          target="_blank"
                        >
                          Join Lemomeme{" "}
                          <IconExternalLink className="inline size-4 align-text-top" />
                        </Link>
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="drop-shadow-md"
                      >
                        <Link
                          href="https://discord.gg/houseofvox"
                          target="_blank"
                        >
                          Join HOV{" "}
                          <IconExternalLink className="inline size-4 align-text-top" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="size-full">
                <div className="size-full rounded-lg bg-[url('/socutebanner.png')] bg-cover bg-center">
                  <div className="aspect-video p-6 text-white">
                    <span className="text-4xl font-semibold shadow-black/[0.2] text-shadow">
                      s/o/cute
                    </span>
                    <p className="my-2 shadow-black/[0.2] text-shadow">
                      <strong className="font-semibold">s/o/cute</strong> was a
                      &quot;command interface&quot; for discord gifs allowing
                      you to edit gifs universally across all of discord. It is
                      now archived but you can still view the website!
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="drop-shadow-md"
                    >
                      <Link href="/archive/socute/index.html" target="_blank">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section>
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
                className="absolute right-0 top-0 mr-2 mt-2 p-1 px-3"
                onClick={() => {
                  navigator.clipboard.writeText("@kdv_");
                  // The toaster is inside of ContactForm
                  toast("Copied to clipboard!", {
                    closeButton: true,
                    duration: 3000,
                  });
                }}
              >
                <IconClipboardCopy className="size-4" />
              </Button>
            </AlertDescription>
          </Alert>
          <ContactForm className="mt-4" />
        </div>
      </section>
      <section className="mx-32 mt-48">
        <SupporterList />
      </section>
      <footer className="mt-16 flex h-24 w-full items-center justify-center border-t-[1px] border-muted/50 bg-background/60">
        <span className="text-sm text-muted-foreground">
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
