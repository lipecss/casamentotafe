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
      }
    }
  }
}
