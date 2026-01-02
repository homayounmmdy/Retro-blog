import { BadgeVariants, variants } from "./Bage-variant";

type BadgeProps = BadgeVariants & {
  children: React.ReactNode;
  active?: boolean;
};

const Badge = ({ children, variant = "primary", size = 'lg', active = false }: BadgeProps) => {
  return (
    <div
      className={`${active && "flex items-center space-x-2 gap-2"}
         ${variants({ variant,size})} `}
    >
      {active && (
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></div>
      )}
      {children}
    </div>
  );
};

export default Badge;
