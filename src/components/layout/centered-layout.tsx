import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ICenteredLayout {
  children: ReactNode;
  className?: string;
}
export const CenteredLayout = ({ children, className }: ICenteredLayout) => {
  return (
    <div className={cn(["max-w-screen-xl mx-auto px-6 py-3", className])}>
      {children}
    </div>
  );
};
