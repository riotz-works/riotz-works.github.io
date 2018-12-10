const { displayName, description } = require('./package.json');

module.exports = {
  siteName: displayName,
  siteDescription: description,
  titleTemplate: `%s | ${ displayName }`
}
