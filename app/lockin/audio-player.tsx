"use client";

import { Button } from "@/components/ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const player = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const onClick = () => {
    if (player.current) {
      isPlaying ? player.current.pause() : player.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={player}>
        <source src="/theydontknowme.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Button variant="ghost" onClick={onClick}>
        {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
      </Button>
    </>
  );
}
