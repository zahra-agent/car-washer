"use client";

import Image from "next/image";
import { Truck, Clock, ShieldCheck, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { mobileServiceContent, neighborhoods } from "@/lib/content";

const mobileIcons = [Truck, Clock, ShieldCheck, Sparkles, Truck];

export default function MobileService() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={mobileServiceContent.image}
                alt="غسيل سيارات متنقل"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {neighborhoods.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {area}
                </span>
              ))}
              <span className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                + المزيد
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="order-1 lg:order-2">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              خدمة متنقلة
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              {mobileServiceContent.title}
            </h2>
            <p className="mb-8 text-muted leading-relaxed">{mobileServiceContent.description}</p>

            <ul className="space-y-4">
              {mobileServiceContent.features.map((feature, i) => {
                const Icon = mobileIcons[i] || Truck;
                return (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                  </li>
                );
              })}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
