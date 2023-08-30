/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bug": "#A8B820",
        "dragon": "#7038F8",
        "dark": "#705848",
        "electric": "#F8D030",
        "fairy": "#EE99AC",
        "fighting": "#C03028",
        "fire": "#F08030",
        "flying": "#A890F0",
        "ghost": "#705898",
        "grass": "#78C850",
        "ground": "#E0C068",
        "ice": "#98D8D8",
        "normal": "#A8A878",
        "poison": "#A040A0",
        "psychic": "#F85888",
        "rock": "#B8A038",
        "steel": "#B8B8D0",
        "water": "#6890F0",
      },
      
      backgroundImage: {
        'fondo': "url('/src/assetes/fondo.png')",
        'carta': "url('/src/assetes/carta.png')",
     
      },
      
    },
  },
  plugins: [],
  
}

