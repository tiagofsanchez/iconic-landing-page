const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: "ICONICO",
    titleTemplate: "%s - Luxury property management",
    description:
      "ICONICO is a luxury property management company offering short and mid-term rentals in true landmark properties.",
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
