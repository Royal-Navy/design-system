import React, { SVGProps } from 'react'

const SvgExtension = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="extension_svg__a"
        d="M13.667 7.333h-1V4.667c0-.734-.6-1.334-1.334-1.334H8.667v-1a1.667 1.667 0 00-3.334 0v1H2.667c-.734 0-1.327.6-1.327 1.334V7.2h.993a1.801 1.801 0 010 3.6h-1v2.533c0 .734.6 1.334 1.334 1.334H5.2v-1a1.801 1.801 0 013.6 0v1h2.533c.734 0 1.334-.6 1.334-1.334v-2.666h1a1.667 1.667 0 000-3.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="extension_svg__b" fill="#fff">
        <use xlinkHref="#extension_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#extension_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExtension
