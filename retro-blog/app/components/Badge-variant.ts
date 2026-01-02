import { cva, VariantProps } from "class-variance-authority";

export type BadgeVariants = VariantProps<typeof variants> & {
  status?: "active" | "lock" | "close";
};
export const variants = cva(
  ["w-fit", "border", "font-mono", "uppercase", "tracking-wider"],
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
        sm: "text-sm px-2 py-1",
        md: "text-md px-2.5 py-[5px]",
        lg: "text-lg px-3 py-1.5",
      },
      font: {
        base: "font-normal",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export const STATUS_COLOR_MAP: Record<
  NonNullable<BadgeVariants["status"]>,
  string
> = {
  active: "bg-green-400",
  lock: "bg-yellow-500",
  close: "bg-red-500",
};
