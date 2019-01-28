const { displayName, description } = require('./package.json');

module.exports = {
  siteName: displayName,
  siteDescription: description,
  titleTemplate: `%s | ${ displayName }`,

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-109297390-1'
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "contents/*/bio.md",
        typeName: "engineer"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "contents/works/*/index.md",
        typeName: "work"
      }
    }
  ]
}
