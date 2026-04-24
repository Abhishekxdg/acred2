import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full border-b border-bone/20 bg-transparent px-0 py-3 text-base text-bone placeholder:text-bone-muted focus-visible:outline-none focus-visible:border-gold transition-colors disabled:cursor-not-allowed disabled:opacity-40 resize-none",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
