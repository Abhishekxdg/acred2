import Image from "next/image";
import { cn } from "@/lib/utils";

interface AcredLogoProps {
  className?: string;
  variant?: "white" | "black";
}

export function AcredLogo({ className, variant = "white" }: AcredLogoProps) {
  const src = variant === "white" ? "/white_text_logo.webp" : "/black_text_logo.webp";
  
  return (
    <Image
      src={src}
      alt="ACRED"
      width={200}
      height={60}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );
}
