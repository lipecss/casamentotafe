import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'tuscany': '#cd9a99',
        'pastel-pink': '#DAA7A6',
        'koamaru': '#2E3C5C',
        'electric-blue': '#566584'
      },
      theme: {
        extend: {
          // Habilita o recurso "full-bleed" no Tailwind
          // Isso adiciona uma classe "container-full-bleed" que pode ser usada para criar seções de largura total.
          container: {
            center: true,
            padding: '1rem',
            screens: {
              'sm': '100%',
              'md': '100%',
              'lg': '1024px',
              'xl': '1280px',
              '2xl': '1280px',
            },
            fullBleed: true
          }
        }
      }
    }
  }
}
