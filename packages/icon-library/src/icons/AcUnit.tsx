import React, { SVGProps } from 'react'

const SvgAcUnit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="ac-unit_svg__a"
        d="M14.667 7.333h-2.78l2.16-2.16-.94-.946L10 7.333H8.667V6l3.106-3.107-.946-.94-2.16 2.16v-2.78H7.333v2.78l-2.16-2.16-.946.94L7.333 6v1.333H6L2.893 4.227l-.94.946 2.16 2.16h-2.78v1.334h2.78l-2.16 2.16.94.946L6 8.667h1.333V10l-3.106 3.107.946.94 2.16-2.16v2.78h1.334v-2.78l2.16 2.16.946-.94L8.667 10V8.667H10l3.107 3.106.94-.946-2.16-2.16h2.78z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="ac-unit_svg__b" fill="#fff">
        <use xlinkHref="#ac-unit_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#ac-unit_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAcUnit
