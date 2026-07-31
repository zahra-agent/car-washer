"use client";

import AnimatedSection from "./AnimatedSection";
import { customerVideos } from "@/lib/content";

export default function CustomerReviews() {
  return (
    <div id="reviews" className="mt-16 border-t border-slate-200 pt-16">
      <AnimatedSection className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          آراء العملاء
        </span>
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          آراء عملاء شفرة الاتقان
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          شوف عملائنا وهم بيتكلموا عن تجربتهم مع خدمات غسيل وتلميع سياراتهم
        </p>
      </AnimatedSection>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {customerVideos.map((video, i) => (
          <AnimatedSection key={video.src} delay={i * 0.08}>
            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-200">
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full bg-black object-cover sm:aspect-[4/5]"
              >
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
