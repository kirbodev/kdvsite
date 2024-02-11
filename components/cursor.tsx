"use client";

import { useState, useRef, useEffect } from "react";

const useAnimationFrame = (callback: (time: number) => void) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  });
};

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [currSize, setSize] = useState(1);
  const [position, setPosition] = useState({ x: -20, y: -20 });
  const [currScale, setScale] = useState(0);
  const [currAngle, setAngle] = useState(0);
  const inputs = useRef<NodeListOf<HTMLElement>>();
  const prevMouse = useRef({ x: 0, y: 0 });
  const size = useRef(1);
  const forceHidden = useRef(false);
  const timeout = useRef<NodeJS.Timeout>();
  const speed = 0.2;

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setMobile(true);
      return;
    }
    inputs.current = document.querySelectorAll(
      "input, textarea, *[contenteditable=true]",
    ) as NodeListOf<HTMLElement>;
    const onMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });

      if (e.target instanceof HTMLElement) {
        if (size.current === 0 && forceHidden.current === false) return;
        size.current =
          e.target.closest("a, button, input, textarea") !== null ? 1.5 : 1;

        if (e.target.closest("[data-no-cursor]") !== null) {
          size.current = 0;
          forceHidden.current = true;
        } else {
          forceHidden.current = false;
        }
      }
    };
    const onTypeEvent = () => {
      size.current = 0;
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        size.current = 1;
      }, 1500);
    };
    const onLeaveEvent = () => {
      size.current = 0;
    };
    const onReturnEvent = () => {
      size.current = 1;
    };
    document.body.addEventListener("mouseleave", onLeaveEvent);
    document.body.addEventListener("mouseenter", onReturnEvent);
    window.addEventListener("mousemove", onMouseMove);
    inputs.current.forEach((input: HTMLElement) => {
      input.addEventListener("keydown", onTypeEvent);
      input.addEventListener("keyup", onTypeEvent);
    });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onLeaveEvent);
      document.body.removeEventListener("mouseenter", onReturnEvent);
      inputs.current?.forEach((input: HTMLElement) => {
        input.removeEventListener("keydown", onTypeEvent);
        input.removeEventListener("keyup", onTypeEvent);
      });
    };
  }, [inputs]);

  useAnimationFrame(() => {
    // if (isMobile) return;
    setPosition({
      x: position.x + (mouse.x - position.x) * speed,
      y: position.y + (mouse.y - position.y) * speed,
    });
    const dx = mouse.x - prevMouse.current.x;
    const dy = mouse.y - prevMouse.current.y;
    prevMouse.current = mouse;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    const velocity = Math.min(distance * 3, 150);
    const scale = (velocity / 250) * 0.5;
    setScale(size.current === 0 ? 0 : currScale + (scale - currScale) * speed);
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (velocity > 20) setAngle(angle);
    setSize(currSize + (size.current - currSize) * speed);
  });

  return (
    !isMobile && (
      <div
        id="cursor"
        className="pointer-events-none fixed -left-4 -top-4 z-[100] h-8 w-8 rounded-full border-2 border-white/[0.75] mix-blend-difference"
        style={{
          transform: `translate(${position.x > 0.001 ? position.x : -20}px, ${position.y > 0.001 ? position.y : -20}px) rotate(${currAngle}deg) scale(${currSize + currScale > 0.001 ? currSize + currScale : 0}, ${currSize - currScale > 0.001 ? currSize - currScale : 0})`,
        }}
      ></div>
    )
  );
}
