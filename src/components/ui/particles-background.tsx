"use client";

import { useCallback } from "react";
import { Parallax } from "react-scroll-parallax";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Parallax speed={-10}>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-0 animate-fade-in pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: "transparent",
            },
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: "#3b82f6",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.3,
              },
              size: {
                value: 3,
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                outMode: "out",
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </Parallax>
  );
}
