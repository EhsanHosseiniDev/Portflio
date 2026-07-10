# Ehsan Hosseini — Portfolio

A bilingual (English / Persian) portfolio site built with **Astro**, **React + Three.js**, **Tailwind CSS**, and **MDX** for content. Cyberpunk-style dark theme with particle 3D hero, project case studies, and a blog. Deploys free on **GitHub Pages**.

---

## راه‌اندازی سریع (فارسی)

### پیش‌نیازها

- Node.js 20+
- یک حساب GitHub

### اجرای محلی

```bash
npm install
npm run dev
```

سایت روی `http://localhost:4321` بالا میاد.

### تنظیم URL برای GitHub Pages

فایل `astro.config.mjs` رو باز کن و این دو خط رو تغییر بده:

```js
const SITE = 'https://<YOUR-GITHUB-USERNAME>.github.io';
const BASE = '/<YOUR-REPO-NAME>';   // مثلاً '/portfolio'
```

> اگر می‌خوای سایت روی آدرس `username.github.io` بدون پوشه باشه (User Site)، ریپو رو با نام `<username>.github.io` بساز و `BASE` رو `'/'` بذار.

### استقرار روی GitHub Pages

۱. ریپو رو روی GitHub بساز و کد رو push کن:

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git
git push -u origin main
```

۲. در صفحه ریپو → **Settings → Pages**:
   - زیر **Build and deployment**، گزینه `Source` رو روی **GitHub Actions** بذار.

۳. اولین push روی `main` به‌صورت خودکار از طریق `.github/workflows/deploy.yml` build و deploy می‌شه. آدرس نهایی توی همون صفحه Pages میاد.

---

## افزودن محتوا

### افزودن پروژه جدید

فایل MDX بساز در `src/content/projects/`:

```
src/content/projects/
  ├── my-new-project.mdx          ← نسخه انگلیسی (lang: "en")
  └── my-new-project.fa.mdx       ← نسخه فارسی (lang: "fa")
```

نمونه frontmatter:

```yaml
---
title: "اسم پروژه"
summary: "خلاصه یک‌خطی"
accent: "cyan"               # cyan | violet | magenta | lime
role: "نقشت"
year: 2025
tech:
  - "C#"
  - ".NET"
tags: ["backend", "performance"]
featured: true
order: 1                     # هرچه کوچک‌تر، اول‌تر
lang: "en"                   # یا "fa"
draft: false
---

## مرور
متن MDX ...
```

### افزودن پست بلاگ

فایل MDX بساز در `src/content/blog/`:

```
src/content/blog/
  ├── my-post.mdx
  └── my-post.fa.mdx
```

نمونه frontmatter:

```yaml
---
title: "عنوان پست"
summary: "یک خط خلاصه"
publishedAt: 2026-05-21
tags: ["testing", "csharp"]
lang: "en"
draft: false
---
```

---

## ساختار پروژه

```
src/
├── components/         # کامپوننت‌های Astro و React (HeroScene 3D اینجاست)
├── content/
│   ├── projects/       # case studyهای پروژه‌ها (MDX)
│   └── blog/           # پست‌های بلاگ (MDX)
├── data/               # داده static (experience, skills)
├── i18n/               # ترجمه‌های UI (en + fa)
├── layouts/            # BaseLayout
├── pages/
│   ├── index.astro     # صفحه اصلی انگلیسی
│   ├── projects/       # /projects و /projects/[slug]
│   ├── blog/           # /blog و /blog/[slug]
│   └── fa/             # نسخه فارسی همه صفحات
└── styles/global.css   # تم سایبرپانک
```

---

## شخصی‌سازی

| می‌خوای چی عوض کنی؟ | کجا |
|---|---|
| رنگ‌های neon | `tailwind.config.mjs` → `colors.neon.*` |
| متن hero، about، contact | `src/i18n/ui.ts` |
| تجربه کاری (timeline) | `src/data/experience.ts` |
| مهارت‌ها | `src/data/skills.ts` |
| ایمیل و لینک‌های اجتماعی | `src/components/Contact.astro` و `src/components/Footer.astro` |
| صحنه 3D | `src/components/HeroScene.tsx` |

---

## Tech Stack

- [Astro 5](https://astro.build) — static site generator
- [React](https://react.dev) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) — 3D scene
- [Three.js](https://threejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com) برای content
- TypeScript

---

## License

MIT — free for personal use and adaptation.
