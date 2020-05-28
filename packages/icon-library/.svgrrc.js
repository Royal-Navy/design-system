module.exports = {
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
    import React, { SVGProps } from 'react';
    interface SVGIconProps extends SVGProps<SVGSVGElement> {
      size?: number
      className?: string
    }
    const ${componentName} = ({ size = 16, ...props }: SVGIconProps) => ${jsx};
    export default ${componentName};
  `
  },
  svgoConfig: {
    plugins: [{ removeViewBox: false }],
  },
}
