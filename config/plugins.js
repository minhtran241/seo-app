module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
  seo: {
    enabled: true,
  },
  translate: {
    enabled: true, // Turn on after getting the API key
    config: {
      // Add the name of your provider here (for example 'deepl' for strapi-provider-translate-deepl or the full package name)
      // provider: "deepl",
      // providerOptions: {
      //   // Your provider might define some custom options like an apiKey
      // },
    },
  },
});
