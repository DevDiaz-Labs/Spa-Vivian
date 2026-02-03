module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0a0a0a', // Deep Rich Black
        'soft-blush': '#fff0f5', // Lavender Blush
        'gold': '#D4AF37',       // Fallback gold
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
