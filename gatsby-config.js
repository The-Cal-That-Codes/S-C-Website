/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Websites and online advertising for any budget",
    titleTemplate: "%s |Freelance web development and marketing services based in Australia",
    description: "Websites and digital marketing personalised for your business on any budget. Customised professional designs hand coded to represent your business how you envision, no templates and no wordpress. Increase traffic and revenue with our digital marketing services specialising in google ads ect. ",
    siteUrl: "https://thestartup.netlify.com",
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
  ],
}
