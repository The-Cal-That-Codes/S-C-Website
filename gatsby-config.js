/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Croft Digital websites and marketing",
    titleTemplate: "%s |Freelance web development and marketing services based in Melbourne and Sydney",
    description: "Websites and digital marketing personalised for your business on any budget. Customised professional designs hand coded to represent your business how you envision, no templates, all inclusive. Increase traffic and revenue with our digital marketing services specialising in google ads ect. ",
    siteUrl: "https://www.croftdigitalwebsitesandmarketing.com/",
    author: "Callan Wilson",
    authorSite: "Callan Wilson",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-postcss',
  ],
}
