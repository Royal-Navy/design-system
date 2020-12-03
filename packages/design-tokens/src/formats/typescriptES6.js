module.exports = (dictionary) => {
  return dictionary.allProperties
    .map((prop) => {
      let toRetProp = `export const ${prop.name}: string = ${JSON.stringify(
        prop.value
      )};`

      if (prop.comment) toRetProp = toRetProp.concat(` // ${prop.comment}`)

      return toRetProp
    })
    .join('\n')
}
