"use client";

import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg ring-1 ring-slate-100 transition-transform hover:scale-110"
          aria-label="إلى الأعلى"
        >
          <ArrowUp className="h-5 w-5" />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-ring relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform hover:scale-110"
          aria-label="واتساب"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">اتصل الآن</span>
        </a>
      </div>
    </>
  );
}
