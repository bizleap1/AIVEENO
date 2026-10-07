import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-[1480px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
