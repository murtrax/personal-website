"use client";

import { useEffect, useState } from "react";
import { TERMINAL_COMMANDS } from "@/utils/constants";
import type { TerminalCommand } from "@/utils/types";

const TYPE_SPEED = 180;
const OUTPUT_DELAY = 350;
const NEXT_COMMAND_DELAY = 1650;

const Terminal = () => {
  const [completedCommands, setCompletedCommands] = useState<TerminalCommand[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const activeCommand = TERMINAL_COMMANDS[activeIndex];

  useEffect(() => {
    if (!activeCommand) return;

    if (typedCommand.length < activeCommand.command.length) {
      const timeout = window.setTimeout(() => {
        setTypedCommand(
          activeCommand.command.slice(0, typedCommand.length + 1),
        );
      }, TYPE_SPEED);

      return () => window.clearTimeout(timeout);
    }

    if (!showOutput) {
      const timeout = window.setTimeout(() => {
        setShowOutput(true);
      }, OUTPUT_DELAY);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setCompletedCommands((commands) => [...commands, activeCommand]);
      setActiveIndex((index) => index + 1);
      setTypedCommand("");
      setShowOutput(false);
    }, NEXT_COMMAND_DELAY);

    return () => window.clearTimeout(timeout);
  }, [activeCommand, typedCommand, showOutput]);

  return (
    <div className="flex min-h-105 sm:min-h-85 max-w-170 flex-col gap-5 rounded-lg border border-white/10 bg-black p-6 font-mono">
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
      </div>

      <div className="flex flex-col gap-3 text-lg">
        {completedCommands.map((item) => (
          <div key={item.command} className="flex flex-col gap-2">
            <p>
              <span className="text-electric-blue">~</span> {item.command}
            </p>
            <div className="text-gray-300">{item.output}</div>
          </div>
        ))}

        {activeCommand && (
          <div className="flex flex-col gap-2">
            <p>
              <span className="text-electric-blue">~</span> {typedCommand}
              <span className="ml-1 animate-pulse">_</span>
            </p>

            {showOutput && (
              <div className="text-gray-300">{activeCommand.output}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
