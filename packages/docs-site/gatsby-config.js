module.exports = {
  siteMetadata: {
    title: `Nelson Design System`,
    description: `The Nelson Design Dystem docs site.`,
    author: `NELSON Standards`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-react-svg',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [
          `${__dirname}/src/helpers/css/_reset.scss`,
          `${__dirname}/src/helpers/css/_variables.scss`,
        ],
      },
    },
    {
      resolve: `gatsby-source-icon-parser`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/library/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/library/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/library/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: true,
        plugins: [
          'gatsby-remark-attr',
          'gatsby-remark-component',
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 720,
              linkImagesToOriginal: false,
              quality: 90,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
