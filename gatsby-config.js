module.exports = {
  siteMetadata: {
    title: `CI Demon: monitor CI builds and website health checks`,
    description: `Native macOS app for monitoring continuous integration systems`,
    keywords: [`Continuous Integration`, `health check`, `notification`, `github`, `menu bar`, `circleci`, `ping`],
    siteUrl: `https://cidemon.github.io`,
    author: `Oscar Franco`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
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
        display: `minimal-ui`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`
    }
    
  ],
}
