import React, { SVGProps } from 'react'

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="refresh_svg__a"
        d="M8 12c-2.213 0-4-1.787-4-4s1.787-4 4-4c1.102 0 2.098.462 2.818 1.182l-1.93 1.93h4.445V2.666L11.77 4.23A5.336 5.336 0 008 2.667 5.33 5.33 0 002.676 8 5.33 5.33 0 008 13.333c2.64 0 4.827-1.92 5.244-4.444h-1.35A4.002 4.002 0 018 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="refresh_svg__b" fill="#fff">
        <use xlinkHref="#refresh_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#refresh_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRefresh
