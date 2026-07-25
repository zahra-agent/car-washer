"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { importancePoints } from "@/lib/content";
import { images } from "@/lib/images";

export default function Importance() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={images.importance}
                alt="أهمية غسيل السيارات"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent-light">
              أهمية الغسيل
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              أهمية غسيل السيارات بالرياض
            </h2>
            <p className="mb-8 text-white/70 leading-relaxed">
              عندما نتحدث عن افضل شركة غسيل سيارات بالرياض فلابد وأن ندرك مدى أهمية
              التنظيف العميق لسيارتك حيث يحسن من تجربة القيادة ويجعلها تعمل بكامل طاقاتها.
            </p>
            <ul className="space-y-4">
              {importancePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-light" />
                  <span className="text-sm leading-relaxed text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
