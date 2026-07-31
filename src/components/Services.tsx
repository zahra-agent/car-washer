"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import CTABanner from "./CTABanner";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            خدماتنا
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            خدمات شركة غسيل سيارات بالرياض
          </h2>
          <p className="mx-auto max-w-3xl text-muted leading-relaxed">
            تقدم شركة غسيل سيارات بالرياض مجموعة خدمات تنظيف شاملة ومتكاملة لضمان
            المحافظة على نظافة السيارة وصيانتها وتحسين أدائها.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <div className="card-hover group overflow-hidden rounded-2xl bg-surface shadow-sm ring-1 ring-slate-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <h3 className="absolute bottom-4 right-4 left-4 text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16">
          <CTABanner compact title="مهتم بأي خدمة؟" subtitle="راسلنا على واتساب أو اتصل — نرد عليك بكل التفاصيل والأسعار" />
        </div>
      </div>
    </section>
  );
}
