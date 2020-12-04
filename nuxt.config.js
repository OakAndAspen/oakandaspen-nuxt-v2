import fontawesome from "./config/nuxt-fontawesome.js";
import i18n from "./config/nuxt-i18n.js";

export default {
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {name: "robots", content: "index,follow"},
            {name: "revisit-after", content: "3 days"}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/icon.png'}
        ]
    },
    loading: {color: '#fff'},
    css: ['@/assets/css/app.scss'],
    plugins: [
        {src: "@/plugins/imgSrc.js"},
        {
            src: '~/plugins/vue2-siema.js',
            ssr: false
        }
    ],
    buildModules: [],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv',
        ['nuxt-i18n', i18n],
        ['nuxt-fontawesome', fontawesome],
        '@nuxtjs/markdownit',
        '@nuxt/content',
        'bootstrap-vue/nuxt'
    ],
    axios: {},
    build: {
        extend(config, ctx) {

        }
    },
    target: 'static',
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false // Or `bvCSS: false`
    }
}
