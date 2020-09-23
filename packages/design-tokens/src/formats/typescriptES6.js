module.exports = function (dictionary) {
  return dictionary.allProperties
    .map(function (prop) {
      var to_ret_prop =
        'export const ' +
        prop.name +
        ': string = ' +
        JSON.stringify(prop.value) +
        ';'
      if (prop.comment) to_ret_prop = to_ret_prop.concat(' // ' + prop.comment)
      return to_ret_prop
    })
    .join('\n')
}
