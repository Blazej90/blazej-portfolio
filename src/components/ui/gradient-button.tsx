import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GradientVariant = "blue" | "emerald";

const underlineVariants: Record<GradientVariant, { solid: string; blur: string }> = {
  blue: { solid: "via-blue-500", blur: "via-indigo-500" },
  emerald: { solid: "via-emerald-500", blur: "via-emerald-500" },
};

export const GradientUnderline = ({
  variant = "blue",
}: {
  variant?: GradientVariant;
}) => (
  <>
    <span
      className={cn(
        "absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100",
        underlineVariants[variant].solid
      )}
    />
    <span
      className={cn(
        "absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100",
        underlineVariants[variant].blur
      )}
    />
  </>
);

type GradientButtonProps = React.ComponentProps<typeof Button> & {
  gradient?: GradientVariant;
};

export const GradientButton = ({
  asChild,
  children,
  className,
  gradient = "blue",
  ...props
}: GradientButtonProps) => {
  const underline = <GradientUnderline variant={gradient} />;

  return (
    <Button
      asChild={asChild}
      className={cn(
        "group/btn relative h-10 px-4 rounded-md bg-surface-dark text-white font-medium dark:shadow-[0px_1px_0px_0px_var(--color-surface)_inset,0px_-1px_0px_0px_var(--color-surface)_inset]",
        className
      )}
      {...props}
    >
      {asChild && React.isValidElement<{ children?: React.ReactNode }>(children)
        ? React.cloneElement(
            children,
            undefined,
            <>
              {children.props.children}
              {underline}
            </>
          )
        : (<>
              {children}
              {underline}
            </>)}
    </Button>
  );
};

export const SweepOverlay = () => (
  <span className="absolute inset-0 bg-black/30 z-0 origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-700 ease-out" />
);
