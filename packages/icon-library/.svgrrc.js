module.exports = {
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['jsx', 'typescript'] })
    return typeScriptTpl.ast`
    import React, { SVGProps } from 'react';
    import { SVGUniqueID } from 'react-svg-unique-id';
    
    interface SVGIconProps extends SVGProps<SVGSVGElement> {
      size?: number
      className?: string
    }
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
