module.exports = {
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] })
    return typeScriptTpl.ast`
      import React from 'react'
      import { SVGUniqueID } from 'react-svg-unique-id';
      import { SVGIconProps } from '../types'

      const ${componentName} = ({ size = 16, ...props }: SVGIconProps) => (
        <SVGUniqueID>{${jsx}}</SVGUniqueID>
      );

      export default ${componentName};
  `
  },
  svgoConfig: {
    plugins: [{ removeViewBox: false }],
  },
}
