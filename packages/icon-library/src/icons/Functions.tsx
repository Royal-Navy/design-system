import React, { SVGProps } from 'react'

const SvgFunctions = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="functions_svg__a"
        d="M12.444 1.778H3.556v1.6L8.444 8l-4.888 4.622v1.6h8.888v-1.778H6.311L10.667 8 6.311 3.556h6.133z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="functions_svg__b" fill="#fff">
        <use xlinkHref="#functions_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#functions_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFunctions
