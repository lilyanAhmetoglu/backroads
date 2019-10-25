/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Qimia Istanbul Tour",
    description: "Explor istanbul us",
    author: "Lilyan Ahmetoğlu",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xjephro37tmj`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:"o7gldOdXGFnrptquCbx4UyFq51PTzAIiAwN9YjBDdUc" ,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`
  ],
}
