import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "شركة غسيل سيارات بالرياض - شفرة الاتقان",
  description:
    "شركة غسيل وتلميع سيارات بالرياض - شفرة الاتقان - خدمة متنقلة، غسيل بالبخار، تلميع احترافي. احجز الآن واستمتع بخصم 30% على غسيل البخار.",
  keywords: [
    "شركة غسيل سيارات بالرياض",
    "غسيل سيارات متنقل",
    "تلميع سيارات",
    "غسيل بالبخار",
    "شفرة اتقان",
  ],
  openGraph: {
    title: "شركة غسيل سيارات بالرياض - شفرة اتقان",
    description: "أفضل شركة غسيل وتلميع سيارات بالرياض - خدمة 24/7",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
