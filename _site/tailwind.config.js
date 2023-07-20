module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './_plugins/*.rb',
      './**/*.md',
      './*.md',
      './*.html',
      './assets/css/*.css'
    ],
    darkMode: 'class',
    theme: {
      theme: {
        extend: {},
      },
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
  }