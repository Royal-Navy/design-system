module.exports = {
  typescript: true,
  prettierConfig: {
    ...require('./prettier.config.js'),
    parser: 'typescript',
  },
  template: (variables, { tpl }) => {
    return tpl`
import React from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'
import { SVGIconProps } from '../types'

${variables.interfaces}

const ${variables.componentName} = ({ size = 16, ...props }: SVGIconProps) => (
  <SVGUniqueID>{${variables.jsx}}</SVGUniqueID>
);

${variables.exports}
`
  },
}
