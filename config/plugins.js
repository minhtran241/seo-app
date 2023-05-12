module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        category: {
          field: "slug",
          references: "name",
        },
        product: {
          field: "slug",
          references: "name",
        },
        solution: {
          field: "slug",
          references: "name",
        },
        "blog-post": {
          field: "slug",
          references: "title",
        },
      },
    },
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
  "import-export-entries": {
    enabled: true,
  },
});
