/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jura: ['Jura', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        'text-wave': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' }
        },
        'text-glitch': {
          '0%': {
            textShadow: '0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75)',
          },
          '14%': {
            textShadow: '0.05em 0 0 rgba(255,0,0,0.75), -0.05em -0.025em 0 rgba(0,255,0,0.75), -0.025em 0.05em 0 rgba(0,0,255,0.75)',
          },
          '15%': {
            textShadow: '-0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75)',
          },
          '49%': {
            textShadow: '-0.05em -0.025em 0 rgba(255,0,0,0.75), 0.025em 0.025em 0 rgba(0,255,0,0.75), -0.05em -0.05em 0 rgba(0,0,255,0.75)',
          },
          '50%': {
            textShadow: '0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75)',
          },
          '99%': {
            textShadow: '0.025em 0.05em 0 rgba(255,0,0,0.75), 0.05em 0 0 rgba(0,255,0,0.75), 0 -0.05em 0 rgba(0,0,255,0.75)',
          },
          '100%': {
            textShadow: '-0.025em 0 0 rgba(255,0,0,0.75), -0.025em -0.025em 0 rgba(0,255,0,0.75), -0.025em -0.05em 0 rgba(0,0,255,0.75)',
          },
        },
        'matrix-effect': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateY(1px)',
            opacity: '1',
          },
        },
        'fly-away': {
          '0%': { 
            transform: 'translateX(0) translateY(0) rotate(0)',
            opacity: '1',
            filter: 'blur(0)'
          },
          '100%': { 
            transform: 'translateX(var(--fly-x, 50px)) translateY(var(--fly-y, -50px)) rotate(var(--fly-rotate, 45deg))',
            opacity: '0',
            filter: 'blur(4px)'
          }
        },
        'fly-in': {
          '0%': { 
            transform: 'translateX(var(--fly-x, 50px)) translateY(var(--fly-y, -50px)) rotate(var(--fly-rotate, 45deg))',
            opacity: '0',
            filter: 'blur(4px)'
          },
          '100%': { 
            transform: 'translateX(0) translateY(0) rotate(0)',
            opacity: '1',
            filter: 'blur(0)'
          }
        }
      },
      animation: {
        'text-wave': 'text-wave 1s ease-in-out',
        'text-glitch': 'text-glitch 0.5s linear infinite',
        'matrix-effect': 'matrix-effect 0.5s ease-in-out infinite',
        'fly-away': 'fly-away 0.5s ease-in forwards',
        'fly-in': 'fly-in 0.5s ease-out forwards'
      }
    }
  }
}; 