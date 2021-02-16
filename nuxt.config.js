export default {
  target: "static",
  server: {
    port: process.env.PORT || 5000,
    host: "0.0.0.0"
  },
  ssr: false,

  pwa: {
    manifest: {
      name: "Oladetounjed",
      short_name: "Oladetounjed",
      description:
        "Oladetoun Temitayo's Github Repository Page for Vesicash Frontend Engineering Recuritment Technical Assessment Test",
      background_color: "#ffffff",
      theme_color: "#084CBF",
      lang: "en"
    }
  },

  head: {
    title: "Oladetounjed",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Oladetoun Temitayo's Github Repository Page for Vesicash Frontend Engineering Recuritment Technical Assessment Test"
      },
      {
        name: "theme-color",
        property: "theme-color",
        content: "#a5854f"
      },
      {
        name: "apple-mobile-web-app-title",
        property: "apple-mobile-web-app-title",
        content: "Oladetounjed"
      },
      {
        name: "og:title",
        property: "og:title",
        content: "Oladetounjed"
      },
      {
        name: "og:site_name",
        property: "og:site_name",
        content: "Oladetounjed"
      },
      {
        name: "og:image",
        property: "og:image",
        content: "/webclip.png"
      },
      {
        name: "twitter:title",
        property: "og:title",
        content: "Oladetounjed"
      },
      {
        name: "twitter:site_name",
        property: "og:site_name",
        content: "Oladetounjed"
      },
      {
        name: "twitter:description",
        property: "twitter:description",
        content:
          "Oladetoun Temitayo's Github Repository Page for Vesicash Frontend Engineering Recuritment Technical Assessment Test"
      },
      {
        name: "twitter:image",
        content: "/webclip.png"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "images/png",
        href: "/favicon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "images/png",
        href: "/webclip.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
      }
    ],
    script: []
  },

  loading: false,

  css: ['@/assets/css/style.css'],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/color-mode"],

  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],

  axios: { baseURL: process.env.baseURL },

  build: {}
};
