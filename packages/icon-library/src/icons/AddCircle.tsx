import React, { SVGProps } from 'react'

const SvgAddCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="add-circle_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm3.333 7.334H8.667v2.666H7.333V8.667H4.667V7.333h2.666V4.667h1.334v2.666h2.666v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add-circle_svg__b" fill="#fff">
        <use xlinkHref="#add-circle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#add-circle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAddCircle
