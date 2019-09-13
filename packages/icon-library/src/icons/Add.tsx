import React, { SVGProps } from 'react'

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="add_svg__a"
        d="M12.667 8.667h-4v4H7.333v-4h-4V7.333h4v-4h1.334v4h4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add_svg__b" fill="#fff">
        <use xlinkHref="#add_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#add_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAdd
