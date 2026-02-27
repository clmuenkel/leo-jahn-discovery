import { ProspectConfig } from "./types";

export const prospects: Record<string, ProspectConfig> = {
  "leo-jahn": {
    slug: "leo-jahn",
    companyName: "Leo Jahn Heizungs- und Sanitärtechnik",
    contactFirstName: "Christoph",
    contactLastName: "Münkel",
    contactTitle: "Inhaber & Geschäftsführer",
    logoUrl: "/prospects/leo-jahn/logo.png",
    industry: "Sanitär & Heizung",
    linkedin: {
      previousCompanies: [],
      yearsInBusiness: 90,
      interests: ["Handwerk", "Familientradition", "Energieeffizienz"],
      funFact:
        "Leo Jahn wurde vor über 90 Jahren gegründet – Christoph führt das Unternehmen heute als stolze 3. Generation der Familie.",
    },
    callNotes:
      "Familienunternehmen mit 90+ Jahren Geschichte in Hünfeld. 3. Generation. Starkes Handwerk, aber digitale Prozesse noch ausbaufähig. Anfragen kommen über Badezimmer-Konfigurator, Heizungsanfragen und Kontaktformular – aber kein systematisches Follow-up. Nachts und am Wochenende werden Notfälle noch auf dem Privathandy des Inhabers entgegengenommen.",
    painPoints: [
      "Anfrageformulare (Badkonfigurator, Heizung, Kontakt) werden nicht sofort beantwortet",
      "Kein strukturiertes Follow-up – Leads gehen verloren",
      "Notfallkontakt läuft über das Privathandy des Inhabers",
      "Verpasste Anrufe außerhalb der Geschäftszeiten = verlorene Aufträge",
      "Angebote werden noch manuell vor Ort erstellt – kein professioneller Auftritt",
      "Niedrige Abschlussquote bei Vor-Ort-Terminen (~40 %)",
    ],
    suggestedSolutions: [
      "Intelligentes Lead-Follow-up-System – sofortige Antwort innerhalb von 60 Sekunden, automatische Nachfasssequenzen an Tag 1, 3 und 7",
      "24/7 KI-Sprach- & Chat-Assistent auf Deutsch – beantwortet Anrufe und Chatanfragen rund um die Uhr, erkennt Notfälle und benachrichtigt den Bereitschaftstechniker per SMS",
      "Digitale Angebotserstellung mit Tablet-Präsentation – Preisbuch mit Fotos, Basic/Comfort/Premium-Optionen und digitaler Unterschrift direkt beim Kunden",
      "Automatisierte Terminbestätigung & Erinnerungen per SMS – 24 Stunden vor dem Termin, keine Doppelbuchungen",
      "Zentrales Lead-Dashboard – alle Anfragen an einem Ort, nichts geht mehr verloren",
    ],
    solutions: [
      {
        id: "lead-followup",
        title: "Intelligentes Lead-Follow-up-System",
        tagline: "Keine Anfrage geht mehr verloren.",
        icon: "Zap",
        features: [
          "Sofortige automatische Antwort innerhalb von 60 Sekunden auf alle Online-Formulare (Badkonfigurator, Heizungsanfragen, Kontaktformular)",
          "Lead-Bewertung nach Dringlichkeit: heiß / warm / kalt",
          "Automatische Nachfasssequenzen an Tag 1, 3 und 7, wenn der Kunde nicht reagiert",
          "Zentrales Lead-Dashboard – alle Anfragen an einem Ort, nichts geht verloren",
          "Wandelt manuelles E-Mail-Nachfassen (Stunden/Tage) in sofortige automatisierte Antworten um",
        ],
        relatedPainPoint:
          "Anfrageformulare (Badkonfigurator, Heizung, Kontakt) werden nicht sofort beantwortet",
      },
      {
        id: "ai-assistant",
        title: "24/7 KI-Sprach- & Chat-Assistent mit automatischer Terminbuchung",
        tagline: "Rund um die Uhr erreichbar – ohne Ihr Privathandy.",
        icon: "Phone",
        features: [
          "Deutschsprachiger KI-Agent beantwortet Anrufe und Website-Chat rund um die Uhr",
          "Notfallerkennung: Heizungsausfall oder Rohrbruch -> sofortige SMS an den Bereitschaftstechniker",
          "Standard-Anfragen: undichter Wasserhahn -> automatische Terminbuchung im nächsten freien Slot",
          "Anbindung an Echtzeit-Kalender (Cal.com API) – verfügbare Zeiten und sofortige Buchung",
          "Automatische SMS-Erinnerung 24 Stunden vor dem Termin – keine Doppelbuchungen",
          "Eliminiert verpasste Anrufe nach Feierabend und entlastet den Inhaber vom Notfalltelefon",
        ],
        relatedPainPoint:
          "Notfallkontakt läuft über das Privathandy des Inhabers",
      },
      {
        id: "digital-quoting",
        title: "Digitale Angebotserstellung mit Tablet-Präsentation",
        tagline: "Professionell präsentieren. Vor Ort abschließen.",
        icon: "FileText",
        features: [
          "Digitales Preisbuch auf dem Tablet mit Fotos und dreistufiger Preisgestaltung (Basis / Komfort / Premium)",
          "Professionelle Präsentation der Optionen mit klarer Preisübersicht direkt beim Kunden",
          "Digitale Unterschrift auf dem Tablet – Angebot wird sofort per E-Mail versendet",
          "Finanzierungsoptionen für größere Projekte direkt vor Ort anbietbar",
          "Steigert die Abschlussquote vor Ort von ca. 40 % auf 65–70 %",
        ],
        relatedPainPoint:
          "Angebote werden noch manuell vor Ort erstellt – kein professioneller Auftritt",
      },
    ],
    theme: {
      accent: "#014d99",
      accentLight: "#1a6ec0",
      accentDark: "#012e5c",
      themeLabel: "leo-jahn-blau",
      easterEggIntro: "Grüß Gott, Christoph. 🔧 Hünfeld grüßt zurück.",
      easterEggClosing:
        "90 Jahre Handwerk – jetzt mit der Technologie der nächsten Generation.",
    },
  },
};

export const defaultProspect: ProspectConfig = {
  slug: "demo",
  companyName: "Ihr Unternehmen",
  contactFirstName: "Geschätzter",
  contactLastName: "Partner",
  contactTitle: "",
  logoUrl: "",
  industry: "Haustechnik",
  linkedin: {},
  painPoints: [],
  suggestedSolutions: [],
};
