module.exports = {
  typescript: true,
  prettierConfig: {
    ...require('./prettier.config.js'),
    parser: 'typescript',
  },
  template: ({ componentName, exports, interfaces, jsx }, { tpl }) => {
    return tpl`
import React from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'
import { SVGIconProps } from '../types'

${interfaces}

const ${componentName} = ({ size = 16, ...props }: SVGIconProps) => (
  <SVGUniqueID>{${jsx}}</SVGUniqueID>
);

${exports}
`
  },
}
