const _ = require('lodash')
const fs = require('fs')
const StyleDictionary = require('style-dictionary').extend('./config.json')

StyleDictionary.registerFormat({
  name: 'typescript/es6',
  formatter: require('./src/formats/typescriptES6.js'),
})

const mapDeepDoubleQuotesTemplate = _.template(
  fs.readFileSync(`${__dirname}/src/formats/mapDeepDoubleQuotes.template`)
)

StyleDictionary.registerFormat({
  name: 'sass/map-deep-double-quotes',
  formatter: mapDeepDoubleQuotesTemplate,
})

StyleDictionary.buildAllPlatforms()
