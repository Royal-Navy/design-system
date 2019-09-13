import React, { SVGProps } from 'react'

const SvgStoreMallDirectory = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="store-mall-directory_svg__a"
        d="M13.333 2.667H2.667V4h10.666V2.667zM14 9.333V8l-.667-3.333H2.667L2 8v1.333h.667v4h6.666v-4H12v4h1.333v-4H14zM8 12H4V9.333h4V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="store-mall-directory_svg__b" fill="#fff">
        <use xlinkHref="#store-mall-directory_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#store-mall-directory_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStoreMallDirectory
