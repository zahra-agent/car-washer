"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/lib/content";

const navLinks = [
  { href: "#features", label: "مميزاتنا" },
  { href: "#results", label: "قبل وبعد" },
  { href: "#reviews", label: "آراء العملاء" },
  { href: "#services", label: "خدماتنا" },
  { href: "#steam", label: "غسيل البخار" },
  { href: "#packages", label: "الباقات" },
  { href: "#faq", label: "أسئلة شائعة" },
  { href: "#contact", label: "تواصل" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className={scrolled ? "" : ""}>
          <BrandLogo variant={scrolled ? "dark" : "light"} />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                scrolled ? "text-foreground hover:bg-primary/5 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-green-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            واتساب
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-accent-light sm:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 lg:hidden ${scrolled ? "text-primary" : "text-white"}`}
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                واتساب
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
