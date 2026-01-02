type BadgeProps = {
  children: React.ReactNode;
  active?: boolean;
};

const Badge = ({ children, active = false }: BadgeProps) => {
  return (
    <div
      className={`${
        active && "flex items-center space-x-2"
      } w-fit border border-teal-400 bg-gray-900 px-3 py-1.5`}
    >
      <span className="font-mono text-lg font-bold uppercase tracking-wider text-teal-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
        {children}
      </span>
      {active && (
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></div>
      )}
    </div>
  );
};

export default Badge;
