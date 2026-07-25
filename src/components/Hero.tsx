"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { heroContent, siteConfig, stats } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80"
          alt="غسيل سيارات بالرياض"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-right"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-accent-light" />
            {heroContent.discount}
          </motion.div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/80 lg:mx-0 mx-auto">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-green-600 hover:shadow-green-500/30"
            >
              <MessageCircle className="h-5 w-5" />
              {heroContent.cta}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-1"
        >
          <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/20">
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
              alt="تلميع سيارات بالرياض"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 animate-float rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-2xl font-extrabold text-primary">25%</p>
            <p className="text-xs text-muted">خصم العملاء الجدد</p>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pb-16 sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm"
          >
            <p className="text-2xl font-extrabold text-accent-light sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
