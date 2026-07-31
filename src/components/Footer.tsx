import BrandLogo from "./BrandLogo";
import { siteConfig, otherServices } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <BrandLogo variant="footer" showTagline />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              لم تعد الحاجة إلى شركة غسيل سيارات بالرياض مجرد رفاهية بل أصبحت ضرورة
              ملحة كضرورة تنظيف منزلك.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">خدمات أخرى</h3>
            <ul className="space-y-2">
              {otherServices.map((service) => (
                <li key={service.title}>
                  <a
                    href={service.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-light"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">طرق التواصل</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{siteConfig.phoneDisplay}</li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} {siteConfig.name} — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
