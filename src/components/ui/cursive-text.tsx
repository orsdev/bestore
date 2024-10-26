import { pacifico } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const CursiveText = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={cn(pacifico.className, className)}>{children}</div>;
