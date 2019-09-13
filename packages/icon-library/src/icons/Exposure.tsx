import React, { SVGProps } from 'react'

const SvgExposure = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="exposure_svg__a"
        d="M10 11.333v1.334h1.333v-1.334h1.334V10h-1.334V8.667H10V10H8.667v1.333H10zm3.333-10H2.667c-.734 0-1.334.6-1.334 1.334v10.666c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V2.667c0-.734-.6-1.334-1.334-1.334zm-10 2h4v1.334h-4V3.333zm10 10H2.667L13.333 2.667v10.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="exposure_svg__b" fill="#fff">
        <use xlinkHref="#exposure_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#exposure_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExposure
