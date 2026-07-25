"use client";

import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { packages, siteConfig } from "@/lib/content";

export default function Packages() {
  return (
    <section id="packages" className="bg-gradient-to-br from-primary to-primary-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent-light">
            {packages.discount}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            {packages.title}
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            توفر شركة غسيل سيارات بالرياض العديد من الباقات المتنوعة كي تلبي كافة احتياجات عملائها.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-slate-100 pb-8 sm:flex-row">
              <div>
                <h3 className="text-2xl font-extrabold text-foreground">الباقة الشاملة</h3>
                <p className="mt-1 text-muted">خدمة كاملة من الداخل والخارج</p>
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                احجز الباقة الآن
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {packages.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg p-2">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
