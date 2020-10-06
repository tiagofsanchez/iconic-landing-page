const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: "ICONICO",
    titleTemplate: "%s - Luxury Property Management",
    description:
      "The world’s most extraordinary homes are too important not to be shared",
    siteUrl: "https://www.theiconico.com/",
    image: "./images/Hero2/hero2.jpg",
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
  ],
}
