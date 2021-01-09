module.exports = {
  siteMetadata: {
    title: `Tempomat: monitor CI builds and website health checks`,
    description: `Native macOS app for monitoring continuous integration systems`,
    keywords: [`Continuous Integration`, `health check`, `notification`, `github`, `menu bar`, `circleci`, `ping`],
    siteUrl: `https://tempomat.dev`,
    author: `Oscar Franco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
