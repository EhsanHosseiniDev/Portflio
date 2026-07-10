/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cyberpunk palette
        bg: {
          DEFAULT: '#05060f',
          soft: '#0a0d1f',
          card: '#0d1130',
        },
        ink: {
          DEFAULT: '#e7ecff',
          dim: '#9aa3c7',
          mute: '#5a6390',
        },
        neon: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          magenta: '#ec4899',
          lime: '#a3e635',
        },
        line: 'rgba(120,140,220,0.18)',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(34,211,238,0.45), 0 0 60px rgba(139,92,246,0.25)',
        'neon-violet': '0 0 24px rgba(139,92,246,0.55)',
        'neon-soft': '0 0 12px rgba(34,211,238,0.25)',
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(120,140,220,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(120,140,220,0.07) 1px, transparent 1px)",
        radial: 'radial-gradient(ellipse at top, rgba(139,92,246,0.18), transparent 60%), radial-gradient(ellipse at bottom right, rgba(34,211,238,0.12), transparent 60%)',
        'neon-gradient': 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 50%, #ec4899 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s steps(2) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
