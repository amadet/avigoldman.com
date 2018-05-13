module.exports = {
  siteMetadata: {
    author: 'Avi Goldman',
    description: `I'm a Developer Advocate over at SparkPost. I spend my time <a href="/blog">thinking</a> about email and how to <a href="https://github.com/avigoldman">improve</a> it. Follow me on <a href="https://twitter.com/theavigoldman">Twitter</a> and lets get coffee in SF.`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: "UA-31917559-9" }
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-transformer-mdx',
  ],
}
