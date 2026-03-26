/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        surface: '#111827',
        accent: '#8B5CF6',
        success: '#10B981',
        textprimary: '#F9FAFB',
        textsecondary: '#9CA3AF',
        border: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 4px 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 8px 50px rgba(139, 92, 246, 0.45)',
      },
    },
  },
  plugins: [],
}
