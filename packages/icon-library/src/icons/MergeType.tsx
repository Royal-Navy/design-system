import React, { SVGProps } from 'react'

const SvgMergeType = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="merge-type_svg__a"
        d="M8 1.333L4.889 4.444H7.11v4.08L2.667 12.97l1.253 1.253 4.969-4.969V4.444h2.222L8 1.334zm2.667 8.97l-1.254 1.253 2.667 2.666 1.253-1.253-2.666-2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="merge-type_svg__b" fill="#fff">
        <use xlinkHref="#merge-type_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#merge-type_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMergeType
