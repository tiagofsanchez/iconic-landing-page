const path = require(`path`)
module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
