/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nachiket Pusalkar",
    titleTemplate: "%s · Full Stack Developer",
    description:
      "Full Stack Developer with experience in Rails, React, Databases, and Deployment",
    siteUrl: "https://www.nachiket.ca", // No trailing slash allowed!
    image: "/images/nachi.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@nachiketp87",
    keywords:
      "montreal, developer, rails, ruby, python, javascript, react, full stack, programmer",
    author: "nachiket pusalkar",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat:400,900"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-sass",
  ],
}
