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
    siteUrl: `https://aadilmughal786.github.io/portfolio`,
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
        background_color: `#2db6fc`,
        display: `minimal-ui`,
        icon: `src/images/site-logo.png`, // This path is relative to the root of the site.
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
          {
            name: "Kurale",
            file: "https://fonts.googleapis.com/css2?family=Kurale&display=swap",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#67b2de`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
