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
    'hero.tagline': 'I build maintainable, well-tested backends and modern web apps with .NET, clean architecture, and a soft spot for AI-assisted workflows.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.location': 'Kaiserslautern, Germany',
    'hero.status': 'Open to opportunities',

    'about.eyebrow': 'About',
    'about.title': 'Engineer, builder, problem solver.',
    'about.body': "I'm a senior software engineer with 8+ years building and modernizing complex backend systems. I'm strongest in C#/.NET, Clean Architecture and DDD, and I happily own delivery end-to-end — from architecture and database tuning to the frontend layer. My background is in robotics, which still shapes how I think about systems: real inputs, real constraints, real consequences.",
    'about.now': "Currently based in Kaiserslautern, Germany, working remotely with a Vancouver-based team on backend refactoring and LLM/RAG integration.",

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
    'hero.tagline': 'Ich baue wartbare, gut getestete Backends und moderne Web-Apps mit .NET, Clean Architecture — und einer Schwäche für KI-gestützte Workflows.',
    'hero.cta.projects': 'Projekte ansehen',
    'hero.cta.contact': 'Kontakt aufnehmen',
    'hero.location': 'Kaiserslautern, Deutschland',
    'hero.status': 'Offen für neue Chancen',

    'about.eyebrow': 'Über mich',
    'about.title': 'Ingenieur, Macher, Problemlöser.',
    'about.body': 'Senior Software Engineer mit über 8 Jahren Erfahrung im Aufbau und in der Modernisierung komplexer Backend-Systeme. Mein Schwerpunkt liegt auf C#/.NET, Clean Architecture und DDD — und ich verantworte gerne den gesamten Lieferzyklus, von der Architektur und Datenbank-Tuning bis zur Frontend-Schicht. Mein Hintergrund in der Robotik prägt bis heute meine Sicht auf Systeme: reale Inputs, reale Constraints, reale Konsequenzen.',
    'about.now': 'Aktuell wohnhaft in Kaiserslautern und remote für ein Team in Vancouver tätig — Fokus: Backend-Refactoring und LLM/RAG-Integration.',

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
