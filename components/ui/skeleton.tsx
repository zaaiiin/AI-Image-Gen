import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-stone-800 dark:bg-stone-800 w-[512px] h-[512px]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
