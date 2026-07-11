export interface ExperienceItem {
  company: string;
  location: string;
  remote?: boolean;
  start: string; // ISO yyyy-mm
  end: string | 'present';
  role: { en: string; de: string };
  summary?: { en: string; de: string };
  bullets: { en: string; de: string }[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Reziland',
    location: 'Vancouver, Canada',
    remote: true,
    start: '2025-07',
    end: 'present',
    role: {
      en: 'Senior Backend Developer',
      de: 'Senior Backend Developer',
    },
    summary: {
      en: 'A property-management platform where building managers handle tenant operations — maintenance requests, amenity bookings (e.g. laundry slots), and resident announcements.',
      de: 'Eine Property-Management-Plattform, auf der Hausverwalter Mieteranliegen abwickeln — Wartungsanfragen, Buchung von Gemeinschaftseinrichtungen (z. B. Waschmaschinen-Slots) und Bewohner-Ankündigungen.',
    },
    bullets: [
      {
        en: 'Refactored a tightly-coupled backend toward SOLID and clean separation of concerns, making it genuinely testable — raised test coverage from 20% to 70% (unit tests + BDD) and improved maintainability index, class coupling, and cyclomatic complexity across the board.',
        de: 'Ein eng gekoppeltes Backend nach SOLID und sauberer Trennung der Verantwortlichkeiten refactored — dadurch echt testbar; Testabdeckung von 20% auf 70% erhöht (Unit-Tests + BDD) und Wartbarkeitsindex, Klassenkopplung sowie zyklomatische Komplexität durchgängig verbessert.',
      },
      {
        en: 'Resolved a PostgreSQL performance bottleneck at its root by restructuring the entity relationships in the data model — not just tuning queries or indexes — confirmed through execution-plan analysis.',
        de: 'Einen PostgreSQL-Performance-Engpass an der Wurzel behoben — durch Umstrukturierung der Entitätsbeziehungen im Datenmodell, nicht nur durch Query- oder Index-Tuning — bestätigt per Ausführungsplan-Analyse.',
      },
      {
        en: 'Diagnosed and fixed an EF Core memory leak surfaced under load and stress testing, improving runtime stability and reliability.',
        de: 'Ein EF-Core-Memory-Leak diagnostiziert und behoben, das unter Last- und Stresstests auftrat — für mehr Laufzeitstabilität und Zuverlässigkeit.',
      },
      {
        en: 'Built an LLM-powered chat interface — a RAG pipeline over SQL Server with OpenAI.',
        de: 'Eine LLM-gestützte Chat-Oberfläche gebaut — eine RAG-Pipeline über SQL Server mit OpenAI.',
      },
    ],
  },
  {
    company: 'Golrang System',
    location: 'Mashhad, Iran',
    start: '2022-11',
    end: '2024-12',
    role: {
      en: 'Senior Backend Developer',
      de: 'Senior Backend Developer',
    },
    summary: {
      en: "Backend services for a large retail chain's enterprise platform — complex commercial discounting, invoice processing, and real-time field-sales monitoring, with pricing rules sales managers could configure and combine without code changes.",
      de: 'Backend-Services für die Unternehmensplattform einer großen Einzelhandelskette — komplexe kommerzielle Rabattierung, Rechnungsverarbeitung und Echtzeit-Überwachung des Außendienstes, mit Preisregeln, die Vertriebsleiter ohne Code-Änderungen konfigurieren und kombinieren konnten.',
    },
    bullets: [
      {
        en: 'Designed and implemented the core architecture of a modular discount engine in C# using Domain-Driven Design, applying dynamic discount rules at item, section, and invoice levels.',
        de: 'Die Kernarchitektur einer modularen Rabatt-Engine in C# mit Domain-Driven Design entworfen und umgesetzt — dynamische Rabattregeln auf Artikel-, Abschnitts- und Rechnungsebene.',
      },
      {
        en: "Introduced mutation testing into the CI pipeline after finding that code-coverage metrics didn't reflect real business validation — PRs were accepted only when critical business logic was effectively tested.",
        de: 'Mutation Testing in die CI-Pipeline eingeführt, nachdem sich zeigte, dass klassische Coverage-Metriken die tatsächliche fachliche Validierung nicht abbilden — Pull Requests wurden nur akzeptiert, wenn kritische Geschäftslogik wirksam getestet war.',
      },
      {
        en: 'Built a Composite-pattern explainability engine that produces a full execution trace for every invoice — which pricing rules applied or were skipped and the reasoning behind each — significantly cutting debugging time for complex commercial scenarios.',
        de: 'Eine Explainability-Engine nach dem Composite-Pattern gebaut, die für jede Rechnung eine vollständige Ausführungsspur liefert — welche Preisregeln angewendet oder übersprungen wurden und warum — was die Debugging-Zeit bei komplexen Szenarien deutlich reduzierte.',
      },
      {
        en: 'Re-architected the real-time field-sales tracking system with a queue-based, Dockerized worker pipeline and SignalR live updates — dashboard latency dropped from ~15s to near real-time and became horizontally scalable.',
        de: 'Das Echtzeit-Außendienst-Tracking mit einer queue-basierten, dockerisierten Worker-Pipeline und SignalR-Live-Updates neu aufgebaut — Dashboard-Latenz von rund 15 s auf nahezu Echtzeit gesenkt und horizontal skalierbar gemacht.',
      },
    ],
  },
  {
    company: 'BlueBit',
    location: 'Vancouver, Canada',
    remote: true,
    start: '2019-10',
    end: '2022-06',
    role: {
      en: 'Backend Developer',
      de: 'Backend Developer',
    },
    summary: {
      en: 'A high-performance cryptocurrency trading platform built on microservices, Domain-Driven Design, and event-driven architecture.',
      de: 'Eine hochperformante Krypto-Trading-Plattform auf Basis von Microservices, Domain-Driven Design und Event-Driven Architecture.',
    },
    bullets: [
      {
        en: 'Built a modular business core with clear separation between domain logic and infrastructure, enabling seamless integration with multiple cryptocurrency exchanges and external providers.',
        de: 'Einen modularen Business-Kern mit klarer Trennung von Domänenlogik und Infrastruktur gebaut — für die nahtlose Anbindung mehrerer Krypto-Börsen und externer Anbieter.',
      },
      {
        en: 'Implemented asynchronous communication with RabbitMQ and MassTransit so services process market events and trading operations with high reliability and scalability.',
        de: 'Asynchrone Kommunikation mit RabbitMQ und MassTransit umgesetzt, sodass Services Marktereignisse und Handelsoperationen zuverlässig und skalierbar verarbeiten.',
      },
      {
        en: "Contributed to a copy-trading system where followers automatically replicate professional traders' strategies by customizable risk/investment profiles, plus dynamic Take-Profit / Stop-Loss automation.",
        de: 'An einem Copy-Trading-System mitgewirkt, bei dem Follower die Strategien professioneller Trader automatisch nach individuellen Risiko- und Investmentprofilen replizieren — inkl. dynamischem Take-Profit / Stop-Loss.',
      },
      {
        en: 'Designed an event-based reporting pipeline that projects large trading volumes into optimized read models for efficient, near real-time reporting.',
        de: 'Eine event-basierte Reporting-Pipeline entworfen, die große Handelsvolumina in optimierte Read-Models projiziert — für effizientes, nahezu Echtzeit-Reporting.',
      },
    ],
  },
  {
    company: 'Bamajoore',
    location: 'Mashhad, Iran',
    start: '2016-09',
    end: '2019-10',
    role: {
      en: 'Full-Stack Developer',
      de: 'Full-Stack Developer',
    },
    summary: {
      en: 'A large-scale vacation-rental platform connecting property owners with travelers looking for short-term accommodations.',
      de: 'Eine große Ferienvermietungs-Plattform, die Eigentümer mit Reisenden für Kurzzeitunterkünfte verbindet.',
    },
    bullets: [
      {
        en: 'Developed and optimized backend services with ASP.NET Core, including a flexible filtering system for a wide range of property attributes and complex search scenarios.',
        de: 'Backend-Services mit ASP.NET Core entwickelt und optimiert — inklusive eines flexiblen Filtersystems für vielfältige Objektmerkmale und komplexe Suchszenarien.',
      },
      {
        en: 'Implemented a Redis-based caching strategy to minimize repetitive database queries for frequently used filters and search results.',
        de: 'Eine Redis-basierte Caching-Strategie implementiert, um wiederholte Datenbankabfragen für häufig genutzte Filter und Suchergebnisse zu reduzieren.',
      },
      {
        en: 'Combined EF Core with Dapper — each used where it gave the best balance of maintainability and speed — over SQL Server for high-traffic data access.',
        de: 'EF Core mit Dapper kombiniert — jeweils dort eingesetzt, wo die beste Balance aus Wartbarkeit und Geschwindigkeit entstand — über SQL Server für Datenzugriffe mit hohem Traffic.',
      },
      {
        en: 'Collaborated with the frontend team on seamless integration with a React app, delivering responsive search and listing experiences.',
        de: 'Mit dem Frontend-Team an der nahtlosen Integration einer React-App zusammengearbeitet — für responsive Such- und Listing-Erlebnisse.',
      },
    ],
  },
];

export function formatRange(item: ExperienceItem, lang: 'en' | 'de', presentLabel: string): string {
  const fmt = (iso: string) => {
    const [y, m] = iso.split('-');
    const monthIdx = Math.max(0, Math.min(11, parseInt(m, 10) - 1));
    const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsDe = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const months = lang === 'de' ? monthsDe : monthsEn;
    return `${months[monthIdx]} ${y}`;
  };

  const startStr = fmt(item.start);
  const endStr = item.end === 'present' ? presentLabel : fmt(item.end);
  return `${startStr} — ${endStr}`;
}
