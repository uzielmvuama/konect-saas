declare module "canvas-confetti" {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    ticks?: number;
    origin?: { x?: number; y?: number };
    scalar?: number;
    drift?: number;
    shapes?: string[];
    zIndex?: number;
    disableForReducedMotion?: boolean;
  }

  const confetti: (options?: ConfettiOptions) => void;
  export default confetti;
}
