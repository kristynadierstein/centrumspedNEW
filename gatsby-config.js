require("dotenv").config({
  path: `.env`,
});
const path = require(`path`)

const prismicHtmlSerializer = require("./src/gatsby/htmlSerializer");
const prismicLinkResolver = require("./src/gatsby/linkResolver");

const website = require("./config/website");

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    banner: website.logo,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "centrumspedNEW",
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        linkResolver: () => prismicLinkResolver,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-lodash",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    'gatsby-plugin-page-transitions',
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    // Must be placed at the end
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
  ],
};

