"use client";

import {
  Check,
  FileText,
  Phone,
  type LucideIcon,
  Zap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import type { Solution } from "@/config/types";

interface Props {
  solutions: Solution[];
}

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Phone,
  FileText,
};

export default function SolutionsSection({ solutions }: Props) {
  if (solutions.length === 0) return null;

  return (
    <section id="loesungen" className="py-24 lg:py-32 bg-bg-elevated relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <ScrollReveal className="text-center mb-14">
          <p className="text-evios text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Unsere Lösungen für Sie
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Drei Wege zu mehr Umsatz und Entlastung
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] || Zap;

            return (
              <ScrollReveal key={solution.id} delay={index * 0.08}>
                <div
                  className="rounded-2xl border p-6 flex flex-col gap-5 glow-blue transition-all duration-300"
                  style={{
                    borderColor: "rgba(var(--color-evios-rgb),0.15)",
                    background:
                      "linear-gradient(135deg, rgba(14,14,26,0.95), rgba(10,10,18,0.98))",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-evios font-mono text-sm font-bold shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(var(--color-evios-rgb),0.12)",
                        boxShadow: "0 0 14px rgba(var(--color-evios-rgb),0.15)",
                      }}
                    >
                      <Icon className="w-5 h-5 text-evios" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{solution.title}</h3>
                    <p className="text-text-secondary text-sm mt-1">{solution.tagline}</p>
                  </div>

                  <div className="space-y-2 mt-auto">
                    {solution.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-green shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-text-muted text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                    </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
