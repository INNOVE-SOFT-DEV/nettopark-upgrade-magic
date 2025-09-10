"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export const PressCircular = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto hover:scale-125 transition-all duration-500 cursor-pointer pulse-glow",
        className
      )}
      {...props}
    >
      <Play className="w-10 h-10 ml-1" />
    </div>
  );
});

PressCircular.displayName = "PressCircular";
