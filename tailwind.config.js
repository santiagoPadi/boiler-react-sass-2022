// eslint-disable-next-line no-undef
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      color: {
        'primary': '#2C7152'
      }
    },
  },
  plugins: [],
}
