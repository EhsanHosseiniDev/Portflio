export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    'hero.greeting': 'Hi, I am',
    'hero.role': 'Senior Full-Stack Software Engineer',
    'hero.tagline': 'I build and scale maintainable, well-tested .NET backends for complex domains — clean architecture, DDD, event-driven and microservice systems, and production AI integration.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.location': 'Germany',
    'hero.status': 'Open to opportunities',

    'about.eyebrow': 'About',
    'about.title': 'Engineer, builder, problem solver.',
    'about.body': "Senior software engineer specializing in backend .NET, building and scaling production systems for complex business domains — large-scale retail, property management, and trading platforms. My toolkit is Clean Architecture, SOLID, DDD, and a genuine test-first (TDD) discipline, applied to API design, event-driven and microservice-based systems, CI/CD pipelines, and EF Core / SQL Server performance tuning. Recently I've added production AI integration — RAG pipelines and natural-language interfaces inside enterprise .NET backends — as evidence of engineering breadth, not a job title. A solid grounding in OOP and design patterns means I pick up new stacks — C++, Java, or a frontend with Angular, Blazor, React, and Vue — as a challenge I look for rather than avoid.",
    'about.now': "Based in Germany and open to backend / software engineering roles — on-site, hybrid, or remote.",

    'experience.eyebrow': 'Experience',
    'experience.title': 'Where I have built things.',
    'experience.present': 'Present',

    'skills.eyebrow': 'Skills',
    'skills.title': 'Tools of the trade.',
    'skills.langs': 'Languages',
    'skills.backend': 'Backend & Web',
    'skills.frontend': 'Frontend',
    'skills.arch': 'Architecture & Patterns',
    'skills.db': 'Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.ai': 'AI-Assisted Dev',
    'skills.test': 'Testing',

    'projects.eyebrow': 'Selected work',
    'projects.title': 'Projects.',
    'projects.subtitle': 'A few systems I designed and built end-to-end.',
    'projects.filter.all': 'All',
    'projects.readMore': 'Read case study',
    'projects.viewAll': 'View all projects',
    'projects.tech': 'Tech',
    'projects.back': 'Back to projects',

    'blog.eyebrow': 'Writing',
    'blog.title': 'Blog & notes.',
    'blog.subtitle': 'Thoughts on backend engineering, architecture, and AI in development.',
    'blog.viewAll': 'View all posts',
    'blog.readPost': 'Read post',
    'blog.minRead': 'min read',
    'blog.back': 'Back to blog',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something.",
    'contact.body': "Open to senior backend, full-stack, or platform roles. Remote or based in Germany. The fastest way to reach me is email.",
    'contact.email': 'Email me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.built': 'Built with Astro, Three.js and a lot of caffeine.',
  },
  de: {
    'nav.home': 'Start',
    'nav.about': 'Über mich',
    'nav.skills': 'Kompetenzen',
    'nav.projects': 'Projekte',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',

    'hero.greeting': 'Hallo, ich bin',
    'hero.role': 'Senior Full-Stack Software Engineer',
    'hero.tagline': 'Ich baue und skaliere wartbare, gut getestete .NET-Backends für komplexe Domänen — Clean Architecture, DDD, event-getriebene und Microservice-Systeme sowie produktive KI-Integration.',
    'hero.cta.projects': 'Projekte ansehen',
    'hero.cta.contact': 'Kontakt aufnehmen',
    'hero.location': 'Deutschland',
    'hero.status': 'Offen für neue Chancen',

    'about.eyebrow': 'Über mich',
    'about.title': 'Ingenieur, Macher, Problemlöser.',
    'about.body': 'Senior Software Engineer mit Schwerpunkt Backend-.NET — im Aufbau und in der Skalierung produktiver Systeme für komplexe Geschäftsdomänen: großflächiger Einzelhandel, Property-Management und Trading-Plattformen. Mein Werkzeugkasten: Clean Architecture, SOLID, DDD und eine echte Test-First-Disziplin (TDD) — angewendet auf API-Design, event-getriebene und Microservice-Systeme, CI/CD-Pipelines sowie EF Core / SQL-Server-Performance-Tuning. Zuletzt kam produktive KI-Integration hinzu — RAG-Pipelines und natürlichsprachliche Schnittstellen in Enterprise-.NET-Backends — als Beleg für technische Breite, nicht als Jobtitel. Ein solides Fundament in OOP und Design-Patterns lässt mich neue Stacks — C++, Java oder ein Frontend mit Angular, Blazor, React und Vue — als willkommene Herausforderung angehen.',
    'about.now': 'Wohnhaft in Deutschland und offen für Backend- / Software-Engineering-Rollen — vor Ort, hybrid oder remote.',

    'experience.eyebrow': 'Berufserfahrung',
    'experience.title': 'Wo ich Dinge gebaut habe.',
    'experience.present': 'Heute',

    'skills.eyebrow': 'Kompetenzen',
    'skills.title': 'Mein Werkzeugkasten.',
    'skills.langs': 'Programmiersprachen',
    'skills.backend': 'Backend & Web',
    'skills.frontend': 'Frontend',
    'skills.arch': 'Architektur & Muster',
    'skills.db': 'Datenbanken',
    'skills.cloud': 'Cloud & DevOps',
    'skills.ai': 'KI-gestützte Entwicklung',
    'skills.test': 'Testing',

    'projects.eyebrow': 'Ausgewählte Arbeiten',
    'projects.title': 'Projekte.',
    'projects.subtitle': 'Eine Auswahl von Systemen, die ich von der Architektur bis zur Auslieferung gebaut habe.',
    'projects.filter.all': 'Alle',
    'projects.readMore': 'Case Study lesen',
    'projects.viewAll': 'Alle Projekte ansehen',
    'projects.tech': 'Technologien',
    'projects.back': 'Zurück zu den Projekten',

    'blog.eyebrow': 'Notizen',
    'blog.title': 'Blog & Notizen.',
    'blog.subtitle': 'Gedanken zu Backend-Engineering, Architektur und KI in der Entwicklung.',
    'blog.viewAll': 'Alle Beiträge',
    'blog.readPost': 'Beitrag lesen',
    'blog.minRead': 'Min. Lesezeit',
    'blog.back': 'Zurück zum Blog',

    'contact.eyebrow': 'Kontakt',
    'contact.title': 'Lass uns etwas bauen.',
    'contact.body': 'Offen für Senior-Rollen im Backend, Full-Stack oder Plattform — remote oder vor Ort in Deutschland. Schnellster Weg: per E-Mail.',
    'contact.email': 'E-Mail schreiben',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.built': 'Gebaut mit Astro, Three.js und viel Koffein.',
  },
} as const;

export type UIKey = keyof typeof ui['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'de') return 'de';
  return 'en';
}

export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return `/de${clean === '/' ? '' : clean}`;
}
