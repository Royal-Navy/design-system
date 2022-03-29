const template = ({ componentName, exports, interfaces, jsx }, { tpl }) => {
  return tpl`
import React from 'react'
import { SVGIconProps } from '../types'

${interfaces}

const ${componentName} = ({ size = 16, ...props }: SVGIconProps) => (
  ${jsx}
);

${exports}
`
}

module.exports = {
  template,
  typescript: true,
  prettierConfig: {
    ...require('./prettier.config.js'),
    parser: 'typescript',
  },
  jsx: {
    babelConfig: {
      plugins: ['react-inline-svg-unique-id'],
    },
  },
  svgProps: {
    width: '{size}',
    height: '{size}',
    fill: 'currentColor',
  },
}
