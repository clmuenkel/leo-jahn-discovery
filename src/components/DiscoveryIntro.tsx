"use client";

import ScrollReveal from "./ScrollReveal";

interface Props {
  companyName: string;
  contactFirstName: string;
  callNotes?: string;
  easterEgg?: string;
}

export default function DiscoveryIntro({
  companyName,
  contactFirstName,
  callNotes,
  easterEgg,
}: Props) {
  const isPersonalized = companyName !== "Ihr Unternehmen";

  return (
    <section
      id="discovery"
      className="py-28 lg:py-36 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--color-bg) 0%, rgba(var(--color-evios-rgb),0.03) 50%, var(--color-bg-elevated) 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-6 relative z-10 text-center">
        <ScrollReveal>
          <p className="text-evios text-xs tracking-[0.3em] uppercase font-medium mb-6">
            Jetzt Sie
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {isPersonalized ? (
              <>
                Jetzt schauen wir uns{" "}
                <span
                  className="text-evios"
                  style={{
                    textShadow: "0 0 30px rgba(var(--color-evios-rgb),0.2)",
                  }}
                >
                  {companyName}
                </span>
                {" an"}
              </>
            ) : (
              "Jetzt schauen wir uns Ihren Betrieb an"
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="w-16 h-px mx-auto mt-8 mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(var(--color-evios-rgb),0.5), transparent)",
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            {isPersonalized
              ? `Erzählen Sie uns, wie ${companyName} heute arbeitet, ${contactFirstName}. Wir erfassen hier alles.`
              : "Erzählen Sie uns, wie Ihr Betrieb heute arbeitet. Wir erfassen hier alles."}
          </p>
        </ScrollReveal>

        {callNotes && (
          <ScrollReveal delay={0.4}>
            <div
              className="mt-10 rounded-xl p-5 text-left max-w-lg mx-auto"
              style={{
                background: "rgba(var(--color-evios-rgb),0.04)",
                border: "1px solid rgba(var(--color-evios-rgb),0.12)",
              }}
            >
              <p className="text-evios text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                Notizen vor dem Gespräch
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {callNotes}
              </p>
            </div>
          </ScrollReveal>
        )}

        {easterEgg && (
          <ScrollReveal delay={0.5}>
            <p className="mt-6 text-text-muted text-xs italic opacity-60">
              {easterEgg}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
