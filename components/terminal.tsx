"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Terminal, { TerminalInput, TerminalOutput } from "./terminal/index";
import { Copyleft } from "lucide-react";
import {
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import { toast } from "sonner";
import DiscordDialog from "./discordDialog";

interface CodeTimeResponse {
  data: {
    grand_total: {
      decimal: string;
      digital: string;
      hours: number;
      minutes: number;
      text: string;
      total_seconds: number;
    };
    range: {
      date: string;
      end: string;
      start: string;
      text: string;
      timezone: string;
    };
  }[];
}

interface Command {
  name: string;
  description: string;
  run: (
    args: string[],
  ) =>
    | void
    | string
    | React.ReactElement<any, string>
    | Promise<void | string | React.ReactElement<any, string>>;
}

function TerminalController({ className }: { className?: string }) {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome-message">kdv_ [Version 2.1.1]</TerminalOutput>,
    <TerminalOutput key="welcome-message-2">
      <span>
        <Copyleft className="inline" size="14px" /> kdv_. Some rights reserved.
      </span>
    </TerminalOutput>,
    <TerminalOutput key="blank" />,
    <TerminalOutput key="help-message">
      <span>
        Type{" "}
        <span
          className="cursor-pointer text-accent"
          onClick={() => setTerminalInput("help")}
        >
          help
        </span>{" "}
        to see a list of available commands.
      </span>
    </TerminalOutput>,
  ]);

  const commands: Command[] = [
    {
      name: "help",
      description: "Lists all available commands.",
      run: () => {
        const longestCommandNameLength = commands.reduce(
          (max, command) => Math.max(max, command.name.length),
          0,
        );
        return (
          <span>
            {commands.map((command) => (
              <span
                key={command.name}
                className={command.name === "exit" ? "text-red-500" : ""}
              >
                {command.name.padEnd(longestCommandNameLength + 5)}{" "}
                {command.description}
                <br />
              </span>
            ))}
          </span>
        );
      },
    },
    {
      name: "clear",
      description: "Clears the terminal.",
      run: () => {
        setTerminalLineData([]);
      },
    },
    {
      name: "echo",
      description: "Prints the given arguments.",
      run: (args) => args.join(" "),
    },
    {
      name: "whoami",
      description: "Prints information about the user.",
      run: async () => {
        const res = await fetch("https://api64.ipify.org")
          .then((res) => res.text())
          .catch(() => "");
        const ip = res.trim();
        if (!ip) return "You're uhh... I have no idea.";
        return `You're ${ip}.`;
      },
    },
    {
      name: "social",
      description: "Find me on social media.",
      run: () => {
        return (
          <>
            <span>
              <IconBrandTwitterFilled className="inline" size="16px" />{" "}
              <a
                href="https://twitter.com/kdv_"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-indigo-400"
              >
                Twitter/X
              </a>
            </span>
            <br />
            <span>
              <IconBrandGithubFilled className="inline" size="16px" />{" "}
              <a
                href="
              https://github.com/kdv_"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-indigo-400"
              >
                GitHub
              </a>
            </span>
            <br />
            <span>
              <IconBrandDiscordFilled className="inline" size="16px" />{" "}
              <DiscordDialog>
                <span className="transition-colors hover:text-indigo-400">
                  Discord
                </span>
              </DiscordDialog>
            </span>
          </>
        );
      },
    },
    {
      name: "about",
      description: "Find out more about me.",
      run: () => {
        return (
          <div className="whitespace-normal">
            <span>
              I&apos;m Luca, or kdv_ as you might know me. I&apos;m a full-stack
              software engineer and I love creating things. I&apos;ve built
              projects on the front-end and back-end and I enjoy keeping myself
              updated with the latest technologies partcularly in the JS
              ecosystem. I&apos;m also a huge fan of open-source and most of my
              projects are available on GitHub.
            </span>
            <br />
            <span>
              I also like to play games in my free time, particularly FPS and
              idle games. My roots are in Italy, so I love cooking and eating
              good food. I moved to Ireland when I was very young and I&apos;ve
              been living here ever since.
            </span>
          </div>
        );
      },
    },
    {
      name: "time",
      description:
        "Gets the amount of time I've spent coding the past 30 days.",
      run: async () => {
        let res: Response;
        try {
          res = await fetch(
            "https://wakatime.com/share/@018c9d6b-4f51-44f6-ad86-307886aa030c/53e7eb43-f574-499d-8440-1c15ea770d0e.json",
            {
              next: {
                revalidate: 3600,
              },
            },
          );
        } catch (e) {
          return "I couldn't fetch the code time, are you sure you're connected to the internet?";
        }
        if (!res.ok) {
          return `I couldn't fetch the code time, it returned error ${res.statusText}`;
        }
        const data: CodeTimeResponse = await res.json();
        // add up the total time
        const totalSeconds = data.data.reduce(
          (acc: number, curr: CodeTimeResponse["data"][0]) =>
            acc + curr.grand_total.total_seconds,
          0,
        );
        return (
          <>
            <span>
              I&apos;ve spent {Math.floor(totalSeconds / 3600)} hours and{" "}
              {Math.floor(totalSeconds / 60) % 60} minutes coding the past 30
              days.
            </span>
          </>
        );
      },
    },
    {
      name: "exit",
      description: "Closes the terminal. (Destructive)",
      run: async () => {
        setTerminalLineData((ld) => [
          ...ld,
          <TerminalOutput key={`exit`}>
            This action is blocked by your admin.
          </TerminalOutput>,
        ]);
        playSound("error");
        await wait(1000);
        setTerminalLineData((ld) => [
          ...ld.toSpliced(
            ld.findIndex((el) => el.key === "exit"),
            1,
          ),
          <TerminalOutput key={`exit`}>
            This action is blocked by your admin..
          </TerminalOutput>,
        ]);
        await wait(1000);
        setTerminalLineData((ld) => [
          ...ld.toSpliced(
            ld.findIndex((el) => el.key === "exit"),
            1,
          ),
          <TerminalOutput key={`exit`}>
            This action is blocked by your admin...
          </TerminalOutput>,
        ]);
        await wait(2000);
        playSound("info");
        setTerminalLineData((ld) => [
          ...ld,
          <TerminalOutput key={`exit-1`}>Exiting...</TerminalOutput>,
        ]);
        await wait(1000);
        // simulation went wrong page
        document.body.innerHTML = `
        <style>@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.glitch{position:relative}.glitch::after,.glitch::before{color:hsl(var(--foreground));content:"Simulation";position:absolute;width:100%;height:100%;background:hsl(var(--background));overflow:hidden;top:0}.glitch::before{left:3px;text-shadow:-2px 0 red;animation-name:glitch-animation-1;animation-duration:2s;animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;animation-direction:reverse-alternate}.glitch::after{left:-3px;text-shadow:-2px 0 #00f;animation-name:glitch-animation-2;animation-duration:2s;animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;animation-direction:reverse-alternate}@keyframes glitch-animation-1{0%{clip:rect(74px,160px,41px,30px)}5%{clip:rect(42px,160px,46px,30px)}10%{clip:rect(26px,160px,35px,30px)}15%{clip:rect(40px,160px,1px,30px)}20%{clip:rect(10px,160px,58px,30px)}25%{clip:rect(38px,160px,29px,30px)}30%{clip:rect(56px,160px,64px,30px)}35%{clip:rect(5px,160px,46px,30px)}40%{clip:rect(52px,160px,47px,30px)}45%{clip:rect(40px,160px,38px,30px)}50%{clip:rect(30px,160px,62px,30px)}55%{clip:rect(33px,160px,26px,30px)}60%{clip:rect(45px,160px,23px,30px)}65%{clip:rect(42px,160px,28px,30px)}70%{clip:rect(21px,160px,79px,30px)}75%{clip:rect(73px,160px,61px,30px)}80%{clip:rect(6px,160px,52px,30px)}85%{clip:rect(65px,160px,20px,30px)}90%{clip:rect(15px,160px,78px,30px)}95%{clip:rect(45px,160px,10px,30px)}100%{clip:rect(9px,160px,33px,30px)}}@keyframes glitch-animation-2{0%{clip:rect(46px,160px,41px,0)}5%{clip:rect(70px,160px,6px,0)}10%{clip:rect(35px,160px,56px,0)}15%{clip:rect(36px,160px,1px,0)}20%{clip:rect(63px,160px,21px,0)}25%{clip:rect(21px,160px,78px,0)}30%{clip:rect(33px,160px,64px,0)}35%{clip:rect(63px,160px,49px,0)}40%{clip:rect(22px,160px,43px,0)}45%{clip:rect(75px,160px,10px,0)}50%{clip:rect(33px,160px,9px,0)}55%{clip:rect(19px,160px,58px,0)}60%{clip:rect(30px,160px,46px,0)}65%{clip:rect(76px,160px,17px,0)}70%{clip:rect(51px,160px,11px,0)}75%{clip:rect(35px,160px,75px,0)}80%{clip:rect(77px,160px,80px,0)}85%{clip:rect(7px,160px,69px,0)}90%{clip:rect(74px,160px,60px,0)}95%{clip:rect(78px,160px,19px,0)}100%{clip:rect(57px,160px,49px,0)}}.restart{color:#2b6cb0;text-decoration:underline}</style><div class="h-screen absolute bg-white inset-0 pointer-events-none z-10"style="animation:fadeOut .5s ease forwards"id=white></div><div class="h-screen flex flex-col items-center justify-center opacity-0"style="animation:fadeIn .5s ease forwards .5s"><svg class="tabler-icon tabler-icon-mood-puzzled"fill=none height=128 stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 viewBox="0 0 24 24"width=128 xmlns=http://www.w3.org/2000/svg><path d="M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794"></path><path d="M10 10h.01"></path><path d="M14 8h.01"></path><path d="M12 15c1 -1.333 2 -2 3 -2"></path><path d="M20 9v.01"></path><path d="M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path></svg><h1 class="font-bold mt-4 text-3xl"><span class=glitch>Something</span> went wrong. Sorry human, would you like to <a class=restart href=# onclick="document.getElementById('white').style.animation='fadeIn 3s ease forwards';setTimeout(()=>{location.href='/?restart=true'},3500)">restart</a>?</h1></div>
        `;
        playSound("bg1");
      },
    },
  ];

  const [count, setCount] = useState(0);
  async function handleInput(input: string) {
    if (input.trim() === "") return;
    setCount((c) => c + 1);
    const command = input.split(" ")[0];
    const args = input.split(" ").slice(1);

    const commandObj = commands.find((c) => c.name === command);
    if (commandObj) {
      const output = await Promise.resolve(commandObj.run(args));
      if (output) {
        setTerminalLineData((ld) => [
          ...ld,
          <TerminalInput key={`${count}-in`}>{input}</TerminalInput>,
        ]);
        setTerminalLineData((ld) => [
          ...ld,
          <TerminalOutput key={`${count}-out`}>{output}</TerminalOutput>,
        ]);
        playSound("success");
      }
    } else {
      setTerminalLineData((ld) => [
        ...ld,
        <TerminalInput key={`${count}-in`}>{input}</TerminalInput>,
      ]);
      setTerminalLineData((ld) => [
        ...ld,
        <TerminalOutput key={`${count}-out`}>
          {`'${command}' is not recognized as an internal or external command, operable program or batch file.`}
        </TerminalOutput>,
      ]);
    }
    scrollToBottom();
  }

  function scrollToBottom() {
    const terminal = document.querySelector(".react-terminal");
    setTimeout(() => {
      terminal?.scrollTo(0, terminal.scrollHeight);
    });
  }

  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const sounds = useMemo<{
    [key: string]: { src: string; volume?: number; loop?: boolean };
  }>(
    () => ({
      error: { src: "https://dl.sndup.net/z454/error.mp3" },
      catastrophic: { src: "https://dl.sndup.net/nv93/catastrophic.mp3" },
      success: { src: "https://dl.sndup.net/mjzq/beep1.wav" },
      info: { src: "https://dl.sndup.net/kqth/info.wav" },
      warning: { src: "https://dl.sndup.net/myvx/warning.mp3" },
      bootup: { src: "https://dl.sndup.net/qs83/bootup.mp3" },
      bg1: {
        src: "https://dl.sndup.net/xszs/electricbg.wav",
        volume: 0.2,
        loop: true,
      },
    }),
    [],
  );

  const playSound = useCallback(
    (
      sound:
        | "error"
        | "catastrophic"
        | "success"
        | "info"
        | "warning"
        | "bootup"
        | "bg1",
    ) => {
      const audio = new Audio();
      audio.src = sounds[sound].src;
      audio.currentTime = 0.1;
      audio.volume = sounds[sound].volume ?? 0.5;
      audio.loop = sounds[sound].loop ?? false;
      audio.play();
    },
    [sounds],
  );

  useEffect(() => {
    if (location.search.includes("restart=true")) {
      history.replaceState({}, document.title, "/");

      const handleClick = () => {
        playSound("bootup");
        toast("Welcome back!");
        document.body.removeEventListener("click", handleClick);
      };
      document.body.addEventListener("click", handleClick);
    }
  }, [playSound]);

  function setTerminalInput(input: string) {
    const inputel = document.querySelector(
      ".terminal-hidden-input",
    ) as HTMLInputElement;
    const inputset = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )?.set;
    inputset?.call(inputel, input);

    const event = new Event("input", { bubbles: true });
    inputel?.dispatchEvent(event);
  }

  return (
    <div className="aspect-video size-full max-[502px]:aspect-[2/3]">
      <Terminal
        name="kdv_"
        onInput={handleInput}
        prompt="$"
        className={className}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}

export default TerminalController;
