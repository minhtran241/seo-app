const { apolloPrometheusPlugin } = require("strapi-prometheus");

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
  "strapi-prometheus": {
    enabled: true,
    config: {
      // add prefix to all the prometheus metrics names.
      prefix: "",

      // use full url instead of matched url
      // true  => path label: `/api/models/1`
      // false => path label: `/api/models/:id`
      fullURL: false,

      // include url query in the url label
      // true  => path label: `/api/models?limit=1`
      // false => path label: `/api/models`
      includeQuery: false,

      // metrics that will be enabled, by default they are all enabled.
      enabledMetrics: {
        koa: true, // koa metrics
        process: true, // metrics regarding the running process
        http: true, // http metrics like response time and size
        apollo: true, // metrics regarding graphql
      },

      // interval at which rate metrics are collected in ms
      interval: 10_000,

      // set custom/default labels to all the prometheus metrics
      customLabels: {
        name: "strapi-prometheus",
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      apolloServer: {
        plugins: [apolloPrometheusPlugin], // add the plugin to get apollo metrics
        tracing: true, // this must be true to get some of the data needed to create the metrics
      },
    },
  },
});
