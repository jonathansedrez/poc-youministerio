module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `you-ministerio`,
        short_name: `You Ministerio`,
        start_url: `/`,
        background_color: `#e3dcc8`,
        theme_color: `#e3dcc8`,
        display: `minimal-ui`,
        icon: `src/images/you.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-151535721-1',
        pageTransitionDelay: 0,
      },
    },
  ],
};
