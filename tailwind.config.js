/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'reel-stop': {
          '0%': { transform: 'translateY(0)' },
          '85%, 100%': { transform: 'translateY(-87.5%)' },
        },
        'bulb-blink': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px 2px rgba(253,224,71,0.9)' },
          '50%': { opacity: '0.3', boxShadow: '0 0 0 0 rgba(253,224,71,0)' },
        },
        'crown-bob': {
          '0%, 100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%': { transform: 'translateY(-6px) rotate(6deg)' },
        },
        shine: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '60%, 100%': { transform: 'translateX(400%) skewX(-20deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 18px 2px rgba(168,85,247,0.55)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(250,204,21,0.6)' },
        },
        'nudge-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        'reel-stop': 'reel-stop 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
        'bulb-blink': 'bulb-blink 1.2s ease-in-out infinite',
        'crown-bob': 'crown-bob 2.4s ease-in-out infinite',
        shine: 'shine 2.8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'nudge-x': 'nudge-x 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
