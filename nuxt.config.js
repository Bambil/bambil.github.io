module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Bambil',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700', rel: 'stylesheet', type: 'text/css'},
      {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', type: 'text/css'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'bootstrap-material-design/dist/css/bootstrap-material-design.css',
    'bootstrap-material-design/dist/css/ripples.css',
    {src: '~assets/App.scss', lang: 'scss'}
  ],
  modules: [
    '@nuxtjs/bootstrap-vue'
  ]

}
