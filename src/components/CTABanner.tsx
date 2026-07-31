import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";

interface CTABannerProps {
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  compact = false,
  title = "عايز تعرف خدماتنا وأسعارنا؟",
  subtitle = "تواصل معنا الآن عبر واتساب أو اتصل مباشرة — فريقنا يرد عليك فورًا",
}: CTABannerProps) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-primary to-primary-light text-center text-white shadow-xl ${
        compact ? "px-6 py-8" : "px-8 py-12"
      }`}
    >
      <h3 className={`font-extrabold ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}>
        {title}
      </h3>
      <p className={`mx-auto max-w-xl text-white/80 ${compact ? "mt-2 text-sm" : "mt-3 text-base"}`}>
        {subtitle}
      </p>
      <div className={`flex flex-col items-center justify-center gap-3 sm:flex-row ${compact ? "mt-5" : "mt-7"}`}>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600 sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" />
          واتساب — {siteConfig.phoneDisplay}
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20 sm:w-auto"
        >
          <Phone className="h-5 w-5" />
          اتصل — {siteConfig.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
