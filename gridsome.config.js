const { displayName, description } = require('./package.json');

module.exports = {
  siteName: displayName,
  siteDescription: description,
  titleTemplate: `%s | ${ displayName }`,

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "contents/*/bio.md",
        typeName: "engineer"
      }
    }
  ]
}
