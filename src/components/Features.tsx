"use client";

import {
  Zap,
  BadgePercent,
  Award,
  Leaf,
  Timer,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { features } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  BadgePercent,
  Award,
  Leaf,
  Timer,
  MapPin,
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            لماذا نحن؟
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            افضل شركة غسيل سيارات بالرياض
          </h2>
          <p className="mx-auto max-w-3xl text-muted leading-relaxed">
            نعلم أنك عندما تبحث عن شركة غسيل سيارات بالرياض فأول ما تفكر به هو مدى
            توفيرها للأمان وجودة الغسيل، وهو ما تعمل على توفيره شركتنا بشتى الطرق.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="card-hover group rounded-2xl border border-slate-100 bg-surface p-6 shadow-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
