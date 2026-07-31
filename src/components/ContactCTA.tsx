import CTABanner from "./CTABanner";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/lib/content";
import { MapPin, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <CTABanner
            title="جاهز تحول سيارتك؟"
            subtitle="لا تحتاج تملأ أي فورم — كلمنا على واتساب أو اتصل واسأل عن أي خدمة أو سعر"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted">{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted">{siteConfig.email}</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
