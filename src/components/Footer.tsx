import { siteConfig, otherServices } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-accent text-sm font-bold">
                ش
              </div>
              <div>
                <p className="font-bold">{siteConfig.name}</p>
                <p className="text-xs text-white/60">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
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
          © {new Date().getFullYear()} {siteConfig.tagline} — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
