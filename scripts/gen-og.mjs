// One-off generator for the default social-share image (public/og.png, 1200x630).
// Run with: node scripts/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og.png');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#05060f"/>
      <stop offset="1" stop-color="#0a0d1f"/>
    </linearGradient>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="0.5" stop-color="#a78bfa"/>
      <stop offset="1" stop-color="#f472b6"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="1050" cy="120" r="260" fill="#a78bfa" fill-opacity="0.12"/>
  <circle cx="150" cy="560" r="240" fill="#22d3ee" fill-opacity="0.10"/>

  <text x="90" y="150" font-family="'Segoe UI', Arial, sans-serif" font-size="26" letter-spacing="6"
        fill="#22d3ee" font-weight="600">PORTFOLIO</text>

  <text x="86" y="300" font-family="'Segoe UI', Arial, sans-serif" font-size="104"
        font-weight="800" fill="url(#grad)">Ehsan Hosseini</text>

  <text x="90" y="372" font-family="'Segoe UI', Arial, sans-serif" font-size="40"
        font-weight="600" fill="#e5e7eb">Senior Full-Stack Software Engineer</text>

  <text x="90" y="430" font-family="'Segoe UI', Arial, sans-serif" font-size="27"
        fill="#94a3b8">Backend &#183; Clean Architecture &#183; .NET &#183; AI-assisted development</text>

  <rect x="90" y="500" width="1020" height="2" fill="#ffffff" fill-opacity="0.08"/>
  <text x="90" y="556" font-family="'Consolas', monospace" font-size="24"
        fill="#64748b">ehsanhosseinidev.github.io/Portflio</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
