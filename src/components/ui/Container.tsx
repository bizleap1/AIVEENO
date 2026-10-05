import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}
