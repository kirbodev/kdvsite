import localFont from "next/font/local";
import Terminal from "@/components/terminal";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Cursor from "@/components/cursor";
import { choco } from "@/styles/fonts";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <div className="absolute inset-0 -z-10 h-screen bg-repeat bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
      <main
        className="flex min-h-screen flex-col items-center justify-between px-24"
        id="main"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <h1
            className={`group/main-title ${choco.className} text-[10rem] font-black`}
          >
            kdv
            <span className="duration-250 text-primary group-hover/main-title:animate-pulse">
              _
            </span>
          </h1>
          <span className="max-w-xl text-center text-xl">
            Hey there! I&apos;m a software engineer based in Dublin. Full-stack.
            Typescript/Node.js. Open-source.
          </span>
          <div className="mt-8 flex gap-4">
            <Button variant="default" size="lg">
              View Projects
            </Button>
            <Button variant="secondary" size="lg">
              Contact me
            </Button>
          </div>
        </div>
        <Terminal />
      </main>
    </>
  );
}
