// StatVariants.ts
import { cva, VariantProps } from "class-variance-authority";

export type StatVariants = VariantProps<typeof statVariants>;

export const statVariants = cva(
  [
    "p-3",
    "text-center",
    "font-mono",
    "backdrop-blur-sm",
    "rounded",
    "transition-all",
    "duration-300",
    "ease-out",
  ],
  {
    variants: {
      variant: {
        // Teal Neon Glow – your original, enhanced
        neonTeal: [
          "border border-teal-400/30",
          "bg-gray-900/80",
          "text-teal-300",
          "drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]",
        ],
        // Amber CRT Terminal
        amberCrt: [
          "border border-amber-500/20",
          "bg-black/90",
          "text-amber-400",
          "drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]",
          "rounded-sm",
        ],
        // Violet Hologram
        violetHolo: [
          "border border-violet-400/25",
          "bg-gray-950/80",
          "text-violet-300",
          "drop-shadow-[0_0_10px_rgba(192,132,252,0.45)]",
          "rounded-md",
        ],
        // Green Matrix
        matrixGreen: [
          "border border-green-500/20",
          "bg-black/95",
          "text-green-400",
          "drop-shadow-[0_0_7px_rgba(74,222,128,0.5)]",
          "rounded",
        ],
        // Red Alert System
        alertRed: [
          "border border-red-500/25",
          "bg-gray-900/85",
          "text-red-400",
          "drop-shadow-[0_0_9px_rgba(248,113,113,0.4)]",
          "rounded-md",
        ],
        // Blue Cyberdeck
        cyberBlue: [
          "border border-sky-400/30",
          "bg-gray-900/75",
          "text-sky-300",
          "drop-shadow-[0_0_8px_rgba(56,189,248,0.45)]",
          "rounded-sm",
        ],
      },
      size: {
        sm: ["p-1.5"],
        md: ["p-3"],
        lg: ["p-4"],
      },
    },
    defaultVariants: {
      variant: "neonTeal",
      size: "md",
    },
  }
);
