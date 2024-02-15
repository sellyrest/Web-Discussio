// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions"
  ],
  tailwindcss: { exposeConfig: true },
  headlessui: {prefix: "H"},
  app:{
    head:{
      title: 'Discussio',
      link:[
        // iNTER FONT
        {rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css'},
        {rel: 'preconnect', href: 'https://rsms.me/'},
      ]
    }
  } 
});
