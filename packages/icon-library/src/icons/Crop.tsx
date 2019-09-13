import React, { SVGProps } from 'react'

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop_svg__a"
        d="M11.333 10h1.334V4.667c0-.734-.6-1.334-1.334-1.334H6v1.334h5.333V10zm-6.666 1.333V.667H3.333v2.666H.667v1.334h2.666v6.666c0 .734.6 1.334 1.334 1.334h6.666v2.666h1.334v-2.666h2.666v-1.334H4.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop_svg__b" fill="#fff">
        <use xlinkHref="#crop_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCrop
