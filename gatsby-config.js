module.exports = {
  siteMetadata: {
    title: `CI Demon: Builds and deployments in your desktop`,
    description: `macOS app for monitoring continuous integration systems`,
    keywords: [`CI`, `notifications`, `notification`, `github`, `gitlab`, `menu bar`, `status bar`, `circleci`],
    siteUrl: `https://ospfranco.github.io/cidemon`,
    author: `Oscar Franco`,
  },
  pathPrefix: `/cidemon`,
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
