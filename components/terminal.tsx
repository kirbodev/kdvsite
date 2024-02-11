"use client";

import React, { Suspense, useState } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "./terminal/index";
import { Copyleft } from "lucide-react";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

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

function TerminalController(props = {}) {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome-message">kdv_ [Version 2.1.1]</TerminalOutput>,
    <TerminalOutput key="welcome-message-2">
      <span>
        <Copyleft className="inline" size="18px" /> kdv_. Some rights reserved.
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
        return commands
          .map(
            (command) =>
              `${command.name.padEnd(longestCommandNameLength + 5)} ${
                command.description
              }`,
          )
          .join("\n");
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
  }

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
    <div className="container drop-shadow-[drop-shadow(0_10px_8px_hsl(var(--accent)/0.1))_drop-shadow(0_4px_3px_hsl(var(--accent)/0.4))]">
      <Terminal name="kdv_" onInput={handleInput} prompt="$">
        {terminalLineData}
      </Terminal>
    </div>
  );
}

export default TerminalController;
