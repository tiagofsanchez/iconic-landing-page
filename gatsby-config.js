const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: "ICONICO",
    titleTemplate: "%s - Luxury property management",
    description:
      "The future of luxury ownership in the real estate market. Our customers experience iconic properties everywhere in the world",
    siteUrl: "https://iconico.netlify.app/",
    image: "./images/Hero2/hero2.jpg",
    siteLanguage: `en`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
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
