import Link from "next/link";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className="z-10 aspect-video w-[350px] rounded-lg border-2 border-foreground/5 drop-shadow-[0px_-15px_10px_#00000044] dark:drop-shadow-[0px_-15px_10px_#000000dd] sm:w-full sm:max-w-[1000px]">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem className="size-full">
              <div className="size-full rounded-lg bg-[url('/pomegranatebanner.png')] bg-cover bg-center">
                <div className="aspect-square p-6 text-white xs:aspect-video">
                  <span className="text-4xl font-semibold shadow-black/[0.2] text-shadow">
                    Pomegranate
                  </span>
                  <p className="my-2 shadow-black/[0.4] text-shadow">
                    <strong className="font-semibold">Pomegranate</strong> is a
                    custom discord bot used to moderate and keep safe{" "}
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
                      asChild
                    >
                      <Link href="https://discord.gg/memenade" target="_blank">
                        Join Lemomeme{" "}
                        <IconExternalLink className="inline size-4 align-text-top" />
                      </Link>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="drop-shadow-md"
                      asChild
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
                {/* eslint-disable-next-line prettier/prettier*/}
                <div className="aspect-square p-6 text-white xs:aspect-video">
                  <span className="text-4xl font-semibold shadow-black/[0.2] text-shadow">
                    s/o/cute
                  </span>
                  <p className="my-2 shadow-black/[0.2] text-shadow">
                    <strong className="font-semibold">s/o/cute</strong> was a
                    &quot;command interface&quot; for discord gifs allowing you
                    to edit gifs universally across all of discord. It is now
                    archived but you can still view the website!
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="drop-shadow-md"
                    asChild
                  >
                    <Link href="/archive/socute/index.html" target="_blank">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="size-full">
              <div className="size-full rounded-lg bg-foreground bg-dot-white/[0.2] dark:bg-dot-black/[0.2]">
                {/* eslint-disable-next-line prettier/prettier*/}
                <div className="aspect-square p-6 text-background xs:aspect-video">
                  <span className="text-4xl font-semibold shadow-black/[0.2] text-shadow">
                    Other Projects
                  </span>
                  <p className="my-2 shadow-black/[0.2] text-shadow">
                    I have a lot more projects on my Github! I just don&apos;t
                    think they&apos;re important enough to be mentioned here.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="drop-shadow-md"
                    asChild
                  >
                    <Link href="https://github.com/kirbodev" target="_blank">
                      View Github
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </>
  );
}
