"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CompareSlider from "./CompareSlider";
import AnimatedSection from "./AnimatedSection";
import CustomerReviews from "./CustomerReviews";
import CTABanner from "./CTABanner";
import { beforeAfterSlides } from "@/lib/content";

export default function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const slide = beforeAfterSlides[active];

  const next = () => setActive((i) => (i + 1) % beforeAfterSlides.length);
  const prev = () => setActive((i) => (i - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);

  return (
    <section id="results" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            نتائج حقيقية
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            قبل وبعد — شوف الفرق بنفسك
          </h2>
          <p className="mx-auto max-w-2xl text-muted leading-relaxed">
            صور واقعية من أعمالنا — اسحب الشريط للمقارنة بين حالة السيارة قبل وبعد التنظيف
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {beforeAfterSlides.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-muted ring-1 ring-slate-200 hover:text-primary"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <CompareSlider
                  before={slide.before}
                  after={slide.after}
                  alt={slide.title}
                />
                <p className="mt-4 text-center text-sm text-muted">{slide.description}</p>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              onClick={prev}
              aria-label="السابق"
              className="absolute top-1/2 -right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg ring-1 ring-slate-100 transition-transform hover:scale-110 sm:-right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="التالي"
              className="absolute top-1/2 -left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-lg ring-1 ring-slate-100 transition-transform hover:scale-110 sm:-left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {beforeAfterSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`شريحة ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-8 bg-primary" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>

        <CustomerReviews />

        <div className="mt-12">
          <CTABanner compact />
        </div>
      </div>
    </section>
  );
}
