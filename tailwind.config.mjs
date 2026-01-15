/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm, editorial palette - NOT AI-generic
        cream: '#F5F0E8',
        sand: '#E8DFD3',
        warmGray: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E8E4DE',
          300: '#D4CFC6',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        // Accent colors - muted, sophisticated
        terracotta: '#C67D5E',
        olive: '#7A8B69',
        navy: '#2B3A52',
        rust: '#A65B3D',
        // Category colors - refined, not primary
        website: '#5B7B95',
        image: '#8B7355',
        video: '#7D6B8A',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
