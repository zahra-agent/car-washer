"use client";

import Image from "next/image";
import { Droplets, Leaf, Wind, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { steamWashContent } from "@/lib/content";

const pointIcons = [Droplets, Leaf, Wind, Shield];

export default function SteamWash() {
  return (
    <section id="steam" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              {steamWashContent.discount}
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              {steamWashContent.title}
            </h2>
            <p className="mb-8 text-muted leading-relaxed">{steamWashContent.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {steamWashContent.points.map((point, i) => {
                const Icon = pointIcons[i] || Droplets;
                return (
                  <div
                    key={point.title}
                    className="rounded-xl border border-cyan-100 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-accent" />
                      <h3 className="font-bold text-foreground">{point.title}</h3>
                    </div>
                    <p className="text-sm text-muted">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={steamWashContent.image}
                alt="غسيل سيارات بالبخار"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 rounded-2xl bg-accent px-6 py-3 text-white shadow-lg">
                <p className="text-3xl font-extrabold">30%</p>
                <p className="text-sm">خصم فوري</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
