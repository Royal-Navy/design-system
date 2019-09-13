import React, { SVGProps } from 'react'

const SvgLooks = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="looks_svg__a"
        d="M8 6.667a4.672 4.672 0 00-4.667 4.666h1.334a3.335 3.335 0 016.666 0h1.334A4.672 4.672 0 008 6.667zM8 4a7.338 7.338 0 00-7.333 7.333H2c0-3.306 2.693-6 6-6s6 2.694 6 6h1.333A7.338 7.338 0 008 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="looks_svg__b" fill="#fff">
        <use xlinkHref="#looks_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#looks_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLooks
