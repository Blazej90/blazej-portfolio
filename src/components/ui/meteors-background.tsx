import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";

export const MeteorsBackground = ({
  number = 30,
  className,
}: {
  number?: number;
  className?: string;
}) => (
  <div
    className={cn(
      "absolute inset-0 w-full h-full -z-10 pointer-events-none",
      className
    )}
  >
    <Meteors number={number} className="top-0 left-0 w-full h-full" />
  </div>
);
