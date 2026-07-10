export interface ExperienceItem {
  company: string;
  location: string;
  remote?: boolean;
  start: string; // ISO yyyy-mm
  end: string | 'present';
  role: { en: string; de: string };
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
    bullets: [
      {
        en: 'Refactored critical parts of an existing backend with maintainability issues — applied SOLID to reduce tight coupling and improve modularity.',
        de: 'Refactoring kritischer Teile eines bestehenden Backends — Anwendung von SOLID-Prinzipien zur Reduktion enger Kopplung und Verbesserung der Modularität.',
      },
      {
        en: 'Identified and resolved memory leaks in core flows, improving runtime stability and reliability.',
        de: 'Identifizierung und Behebung von Memory Leaks in zentralen Abläufen — spürbar verbesserte Laufzeitstabilität.',
      },
      {
        en: 'Analyzed SQL Server execution plans to optimize slow queries and indexing strategy.',
        de: 'Analyse von SQL-Server-Ausführungsplänen zur Optimierung langsamer Abfragen und Indexierungsstrategien.',
      },
      {
        en: 'Integrated LLM-based features and set up a RAG pipeline with attention to latency, cost and structured outputs.',
        de: 'Integration LLM-basierter Funktionen und Aufbau einer RAG-Pipeline mit Fokus auf Latenz, Kosten und strukturierte Ausgaben.',
      },
    ],
  },
  {
    company: 'Golrang System',
    location: 'Iran',
    start: '2022-11',
    end: '2024-12',
    role: {
      en: 'Senior Backend Developer',
      de: 'Senior Backend Developer',
    },
    bullets: [
      {
        en: 'Implemented a complex commercial discount system for a nationwide retail network — focused on flexibility, stability, and high performance.',
        de: 'Entwicklung eines komplexen Rabattsystems für ein landesweites Einzelhandelsnetz — mit Fokus auf Flexibilität, Stabilität und hoher Performance.',
      },
      {
        en: 'Designed automated tests (unit + e2e) and custom tools to validate complex business logic.',
        de: 'Aufbau automatisierter Tests (Unit + E2E) und eigener Tools zur Validierung komplexer Geschäftslogik.',
      },
      {
        en: 'Optimized large real-time location ingestion from mobile vendors — read times dropped from ~6s to under 200ms at peak load.',
        de: 'Optimierung der Echtzeit-Verarbeitung großer Standortdaten von mobilen Anbietern — Lesezeiten von rund 6 s auf unter 200 ms unter Spitzenlast reduziert.',
      },
      {
        en: 'Raised maintainability with unit + integration tests (~70% coverage) and used mutation testing to validate core business rules.',
        de: 'Wartbarkeit gesteigert durch Unit- und Integrationstests (~70% Coverage) sowie Mutation Testing für die zentralen Geschäftsregeln.',
      },
    ],
  },
  {
    company: 'BlueBit',
    location: 'Startup',
    start: '2019-10',
    end: '2022-06',
    role: {
      en: 'Backend Developer',
      de: 'Backend Developer',
    },
    bullets: [
      {
        en: 'Implemented an integrated trading system supporting multiple brokers.',
        de: 'Entwicklung eines integrierten Trading-Systems mit Unterstützung mehrerer Broker.',
      },
      {
        en: 'Dockerized and built event-driven architecture across decentralized servers for scalability and flexibility.',
        de: 'Dockerisierung und Aufbau einer event-getriebenen Architektur über verteilte Server — für Skalierbarkeit und Flexibilität.',
      },
      {
        en: 'Used advanced design patterns and testable code to improve stability and maintainability.',
        de: 'Einsatz fortgeschrittener Design-Patterns und testbaren Codes zur Verbesserung von Stabilität und Wartbarkeit.',
      },
    ],
  },
  {
    company: 'Bamajoore',
    location: 'Startup',
    start: '2016-09',
    end: '2019-10',
    role: {
      en: 'Full-Stack Developer',
      de: 'Full-Stack Developer',
    },
    bullets: [
      {
        en: 'Built backend for a furnished property rental platform with EF Core and ASP.NET Core, handling complex filtering and requests.',
        de: 'Backend für eine Plattform zur Vermietung möblierter Immobilien gebaut — mit EF Core und ASP.NET Core, inkl. komplexer Filter- und Suchlogik.',
      },
      {
        en: 'Implemented Redis-based caching to avoid redundant DB queries for repeated searches.',
        de: 'Redis-basiertes Caching implementiert, um redundante DB-Abfragen bei wiederholten Suchen zu vermeiden.',
      },
      {
        en: 'Designed and optimized multi-filter search methods for fast response times.',
        de: 'Entwurf und Optimierung von Suchverfahren mit mehreren Filtern für schnelle Antwortzeiten.',
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
