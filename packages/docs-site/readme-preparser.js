const { marksy } = require('marksy')
const { getTables } = require('mdtable2json')
const ReactDOMServer = require('react-dom/server')

const babel = require('@babel/core')
const React = require('react')
const { createElement } = require('react')

const action = () => {}

/**
 * Transform table markdown AST (rows and cells) into data
 * structure that can be consumed by the `<DataTable />` component
 *
 * NOTE: The implementation is limited to 1 table per `README.md`
 *
 * @param {array} children
 * @returns {array}
 */
function transformTableData(markdown) {
  const tables = getTables(markdown)

  return (tables.length >= 1 && tables[0].json) || []
}

/**
 * Base64 encode a prop so that it doesn't confuse the MDX parser
 *
 * @param {string} string
 * @returns {string}
 */
function encodeProp(string) {
  return Buffer.from(string).toString('base64')
}

/**
 * Generates a compiler to create an MDX version of a `README.md`
 *
 * TODO: Use JSX instead of createElement and transpile at runtime
 *
 * @param {string} markdown
 * @param {object} options
 * @returns {function}
 */
function compile(markdown, options) {
  const tableData = transformTableData(markdown)

  return marksy({
    createElement,
    elements: {
      code({ language, code }) {
        let children = babel.transform(code, {
          plugins: ['@babel/plugin-transform-react-jsx'],
        }).code

        children = children.replace(/(?<=createElement\().*?(?=, )/g, match => {
          return `'${match}'`
        })

        return createElement(
          'CodeHighlighter',
          {
            source: encodeProp(code),
            language: language || 'javascript',
          },
          // eslint-disable-next-line no-eval
          eval(children)
        )
      },
      table() {
        return createElement('DataTable', {
          caption: 'Props',
          data: encodeProp(JSON.stringify(tableData)),
        })
      },
    },
  })(markdown, options)
}

exports.convertToMDX = markdown => {
  const { tree } = compile(markdown, {})

  return ReactDOMServer.renderToStaticMarkup(tree)
}
