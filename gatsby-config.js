/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aadil`,
    description: `Portfolio website of Aadil Mugal`,
    author: `Aadil Mugal <aadilshe786@gmail.com>`,
    // siteUrl: ``,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-dark-mode`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aadil`,
        short_name: `AM`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],

        web: [
          {
            name: "Poppins",
            file: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
          },
          {
            name: "Courgette",
            file: "https://fonts.googleapis.com/css2?family=Courgette&display=swap",
          },
        ],
      },
    },
  ],
}
