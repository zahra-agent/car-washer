"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            تواصل معنا
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            تواصل مع شركة غسيل سيارات بالرياض
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            يمكنك حجز خدمتك في غضون دقائق معدودة. نوفر لك غسيلها بالمغاسل الخاصة بنا
            كما يتوفر خدمة التنظيف بالبخار المتنقل حيث نصل إليك في أي مكان.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: Phone, label: "الهاتف", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
                { icon: Mail, label: "البريد الإلكتروني", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MapPin, label: "الموقع", value: siteConfig.location, href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="card-hover flex items-center gap-4 rounded-2xl border border-slate-100 bg-surface p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="font-bold text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-100 bg-surface p-8 shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Send className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">تم إرسال رسالتك!</h3>
                  <p className="mt-2 text-muted">سنتواصل معك في أقرب وقت ممكن.</p>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-foreground">الإسم *</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="اسمك الكريم"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-foreground">رقم الجوال *</label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="+966"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      الخدمة المطلوب تنفيذها *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="اكتب الخدمة التي تحتاجها..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary-light hover:shadow-primary/30"
                  >
                    <Send className="h-4 w-4" />
                    ارسل الرسالة
                  </button>
                </>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
