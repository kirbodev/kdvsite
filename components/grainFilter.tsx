"use client";

export default function GrainFilter() {
  return (
    <svg aria-hidden="true" className="sr-only">
      <defs>
        <filter id="grainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="6.2"
            numOctaves="6"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
  );
}
