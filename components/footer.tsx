import { CopyleftIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 flex min-h-24 w-full flex-col items-center justify-center border-t-[1px] border-muted/50 bg-background/60">
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
  );
}
