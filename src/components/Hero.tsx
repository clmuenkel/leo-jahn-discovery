"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  companyName: string;
  contactFirstName: string;
  contactLastName: string;
  contactTitle: string;
  logoUrl?: string;
  watermarkUrl?: string;
}

export default function Hero({
  companyName,
  logoUrl,
  watermarkUrl,
}: HeroProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2100),
      setTimeout(() => setPhase(5), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const hasLogo = logoUrl && logoUrl.length > 0;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 48%, rgba(var(--color-evios-rgb),0.06) 0%, transparent 100%)",
        }}
      />

      {watermarkUrl && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <Image
            src={watermarkUrl}
            alt=""
            width={600}
            height={600}
            className="w-[500px] h-auto opacity-[0.03] select-none"
            style={{ filter: "grayscale(1) brightness(2)" }}
            aria-hidden
          />
        </div>
      )}

      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-0">
        {/* Phase 1: EVIOS Logo */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "none" : "scale(0.9)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Image
            src="/evios-logo-blue.png"
            alt="EVIOS"
            width={160}
            height={44}
            className="h-10 w-auto mx-auto"
            style={{
              filter: phase >= 1 ? "drop-shadow(0 0 12px rgba(var(--color-evios-rgb),0.25))" : "none",
              transition: "filter 1.5s ease",
            }}
            priority
          />
        </div>

        {/* Phase 2: "Prepared for" */}
        <div
          className="pt-16"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "none" : "translateY(12px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <p className="text-text-muted text-[13px] tracking-[0.3em] uppercase font-medium">
            Exklusiv vorbereitet für
          </p>
        </div>

        {/* Phase 3: Company name + optional logo */}
        <div
          className="pt-5"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "none" : "translateY(16px)",
            transition: "all 1.1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {hasLogo && (
            <div className="mb-5 flex justify-center">
              <div className="bg-white rounded-2xl px-5 py-3 inline-flex items-center justify-center shadow-lg">
                <Image
                  src={logoUrl}
                  alt={companyName}
                  width={280}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Phase 5: Scroll hint */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{
          opacity: phase >= 5 ? 1 : 0,
          transition: "opacity 1s ease",
          animation: phase >= 5 ? "scroll-hint 2.5s ease-in-out infinite" : "none",
        }}
      >
        <a href="#team" aria-label="Scroll down">
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </a>
      </div>
    </section>
  );
}
