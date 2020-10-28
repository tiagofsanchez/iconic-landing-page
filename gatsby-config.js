const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: "ICONICO",
    titleTemplate: "%s - Luxury Property Management",
    description:
      "The world’s most extraordinary homes are too important not to be shared",
    siteUrl: "https://www.theiconico.com/",
    siteLanguage: `en`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`EB Garamond`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the ICONICO`,
        short_name: `ICONICO`,
        lang: `en`,
        description:
          "The world’s most extraordinary homes are too important not to be shared",
        start_url: `/?source=pwa'`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
