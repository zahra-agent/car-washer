import Image from "next/image";
import { siteConfig } from "@/lib/content";

interface BrandLogoProps {
  variant?: "light" | "dark" | "footer";
  showTagline?: boolean;
}

export default function BrandLogo({ variant = "light", showTagline = true }: BrandLogoProps) {
  const titleClass =
    variant === "light" ? "text-white" : variant === "footer" ? "text-white" : "text-primary";
  const taglineClass =
    variant === "light" ? "text-white/70" : variant === "footer" ? "text-white/60" : "text-muted";

  return (
    <a href="#" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={48}
        height={48}
        className={`h-11 w-11 shrink-0 object-contain ${variant === "footer" ? "rounded-xl bg-white p-1" : ""}`}
        priority
      />
      <div className="hidden min-w-0 sm:block">
        <p className={`truncate text-lg font-extrabold leading-tight ${titleClass}`}>
          {siteConfig.name}
        </p>
        {showTagline && (
          <p className={`truncate text-xs ${taglineClass}`}>
            {siteConfig.tagline}
          </p>
        )}
      </div>
    </a>
  );
}
