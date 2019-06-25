const { createElement } = require('react')
const { marksy } = require('marksy')
const ReactDOMServer = require('react-dom/server')

/**
 * TODO: Transform table markdown AST (rows and cells) into data
 * structure that can be consumed by the `<DataTable />` component
 *
 * @param {array} children
 * @returns {array}
 */
function transformTableData(children) {
  return children
}

const compile = marksy({
  createElement,
  elements: {
    code({ language, code }) {
      return createElement('CodeHighlighter', {
        example: code,
        source: code,
        language: language || 'javascript',
      })
    },
    table({ children }) {
      return createElement('DataTable', {
        caption: 'Props',
        data: transformTableData(children),
      })
    },
  },
})

exports.convertToMDX = markdown => {
  const { tree } = compile(markdown, {})
  return ReactDOMServer.renderToStaticMarkup(tree)
}
