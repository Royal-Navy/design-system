const _ = require('lodash')
const fs = require('fs')
const StyleDictionary = require('style-dictionary').extend('./config.json')

const typingsES6Template = _.template(
  fs.readFileSync(`${__dirname}/src/templates/typings/es6.template`)
)

const mapDeepDoubleQuotesTemplate = _.template(
  fs.readFileSync(`${__dirname}/src/templates/mapDeepDoubleQuotes.template`)
)

StyleDictionary.registerFormat({
  name: 'typings/es6',
  formatter: typingsES6Template,
})

StyleDictionary.registerFormat({
  name: 'sass/map-deep-double-quotes',
  formatter: mapDeepDoubleQuotesTemplate,
})

StyleDictionary.buildAllPlatforms()
