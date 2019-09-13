import React, { SVGProps } from 'react'

const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="web_svg__a"
        d="M13.333 2.667H2.667c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333zM10 12H2.667V9.333H10V12zm0-3.333H2.667V6H10v2.667zM13.333 12h-2.666V6h2.666v6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="web_svg__b" fill="#fff">
        <use xlinkHref="#web_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#web_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWeb
