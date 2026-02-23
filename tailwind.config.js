/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#0A1833',
                    700: '#071224',
                    800: '#050d1a',
                    900: '#030810',
                    950: '#01050b',
                },
                brand: {
                    DEFAULT: '#0A1833',
                    light: '#132244',
                    lighter: '#1e3560',
                    accent: '#3B82F6',
                    accentLight: '#60A5FA',
                    accentGlow: '#2563EB',
                    gold: '#C9A84C',
                    goldLight: '#E8C97A',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #0A1833 0%, #132244 40%, #1e3560 100%)',
                'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'glow': '0 0 30px rgba(59, 130, 246, 0.15)',
                'glow-lg': '0 0 60px rgba(59, 130, 246, 0.2)',
                'card': '0 4px 24px rgba(0,0,0,0.08)',
                'card-hover': '0 12px 48px rgba(0,0,0,0.15)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
