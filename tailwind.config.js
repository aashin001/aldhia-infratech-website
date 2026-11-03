/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      brand: { navy: '#032959', green: '#5FA602', dark: '#10243A',
        ice: '#F4F7FA', slate: '#64748B', border: '#DCE5ED',
        lightGreen: '#8CC63E', paleGreen: '#E8F6D9', alert: '#DC2626' }
    },
    fontFamily: { sans: ['Inter', 'Arial', 'sans-serif'] }
  }},
  plugins: []
}
