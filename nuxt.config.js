module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  loading: {
    color: '#f00'
  },

  css: [
    '@/assets/css/plugins/bootstrap.min.css',
    '@/assets/css/plugins/font-awesome.css',
    '@/assets/css/style-dark.css',
    '@/assets/css/settings/left-nav.css',
    '@/assets/css/settings/green-color.css',
    '@/assets/css/settings/hexagon-box.css',
    '@/assets/css/preview.css',
    '@/assets/styles/animations.scss'
  ],

  plugins: [],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  build: {
    extend(config, ctx) {}
  }
}
