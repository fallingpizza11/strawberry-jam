module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        typeName: `GraphCMS`,
        url: `https://api-us-west-2.graphcms.com/v2/cknzmgsunm7ii01yz1zpgh5qv/master`,

      }
    }, `gatsby-plugin-emotion`
  ],
}