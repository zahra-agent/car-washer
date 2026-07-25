"use client";

import { Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { tips } from "@/lib/content";

export default function Tips() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            نصائح مفيدة
          </span>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            نصائح إزالة الروائح من السيارة
          </h2>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-sm leading-relaxed text-foreground">{tip}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
