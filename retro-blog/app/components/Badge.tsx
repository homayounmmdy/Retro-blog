import { BadgeVariants, STATUS_COLOR_MAP, variants } from "./Badge-variant";

type BadgeProps = BadgeVariants & {
  children: React.ReactNode;
};

const Badge = ({
  children,
  variant = "primary",
  size = "lg",
  font = 'base',
  status,
}: BadgeProps) => {
  return (
    <div
      className={`${status && "flex items-center space-x-2 gap-2"}
         ${variants({ variant, size, font })} `}
    >
      {status && (
        <div
          className={`h-1.5 w-1.5 animate-pulse rounded-full ${STATUS_COLOR_MAP[status]}`}
        ></div>
      )}
      {children}
    </div>
  );
};

export default Badge;
