declare module "canvas-confetti" {
  export interface ConfettiOptions {
    particleCount?: number;
    spread?: number;
    origin?: { x?: number; y?: number };
    zIndex?: number;
    colors?: string[];
    scalar?: number;
  }

  export default function confetti(options?: ConfettiOptions): void;
}
