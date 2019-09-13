import React, { SVGProps } from 'react'

const SvgExposurePlus1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="exposure-plus-1_svg__a"
        d="M6.667 4.667H5.333v2.666H2.667v1.334h2.666v2.666h1.334V8.667h2.666V7.333H6.667V4.667zM13.333 12H12V4.92l-2 .68V4.467l3.133-1.134h.2V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="exposure-plus-1_svg__b" fill="#fff">
        <use xlinkHref="#exposure-plus-1_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#exposure-plus-1_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgExposurePlus1
