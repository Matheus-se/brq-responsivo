export default {
    target: 'server',
    router: {
        base: '/clientes/sioux'
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'BRQ Digital Solutions',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Bebas+Neue'
            },
            { rel: 'icon', type: 'image/png', href: '/favicon.png' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/css/global.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: "@/plugins/aos", mode: "client" },
        { src: "@/plugins/gsap", mode: "client" },
        { src: "@/plugins/custom-scripts", mode: "client" }

    ],

    // purgeCSS: {
    //   whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
    // },

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}