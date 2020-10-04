module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Centrumsped s.r.o.', // Navigation and Site Title
  titleAlt: 'Centrumsped s.r.o.', // Title for JSONLD
  description: 'Centrumsped s.r.o. - EXHIBITION LOGISTICS WORLDWIDE',
  headline: 'Centrumsped s.r.o. - EXHIBITION LOGISTICS WORLDWIDE', // Headline for schema.org JSONLD
  url: 'http://www.centrumsped.com/', // Domain of your site. No trailing slash!
  logo: '/logos/logo.png', // Used for SEO
  ogLanguage: 'fr_CA', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Centrumsped', // shortname for manifest. MUST be shorter than 12 characters
  author: 'kristyna dierstein', // Author for schemaORGJSONLD
  themeColor: '#000000',
  backgroundColor: '#ffffff',

  twitter: '@centrumsped', // Twitter Username
  facebook: 'centrumsped', // Facebook Site Name
  googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}

