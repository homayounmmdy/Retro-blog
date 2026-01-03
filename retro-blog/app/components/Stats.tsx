// Stat.tsx
import { StatVariants, statVariants } from "./StatVariants";

interface Props {
  label: string;
  value: number | string;
}

interface StatProps extends Props, StatVariants {}

const Stat = ({ label, value, variant, size }: StatProps) => {
  return (
    <div className={statVariants({ variant, size })}>
      <div className="text-[10px] uppercase tracking-wider opacity-90">
        {label}
      </div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  );
};

export default Stat;
