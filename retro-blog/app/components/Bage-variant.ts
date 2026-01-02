import { cva, VariantProps } from "class-variance-authority";

export type BadgeVariants = VariantProps<typeof variants>;

export const variants = cva(
  ["w-fit", "border", "font-mono", "font-bold", "uppercase", "tracking-wider"],
  {
    variants: {
      variant: {
        primary: [
          "border-teal-400",
          "bg-gray-900",
          "text-teal-300",
          "drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]",
        ],
        secondary: [
          "border-teal-400/30",
          "bg-gray-900/80",
          "rounded-sm",
          "text-gray-300",
        ],
      },
      size: {
        sm: "text-sm px-1 py-0.5",
        md: "text-md px-2 py-1",
        lg: "text-lg px-3 py-1.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
