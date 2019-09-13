import React, { SVGProps } from 'react'

const SvgPersonPinCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="person-pin-circle_svg__a"
        d="M8 1.333A4.672 4.672 0 003.333 6C3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6A4.672 4.672 0 008 1.333zm0 1.334a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm0 6.666A3.188 3.188 0 015.333 7.9C5.347 7.02 7.113 6.533 8 6.533c.887 0 2.653.487 2.667 1.367A3.188 3.188 0 018 9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="person-pin-circle_svg__b" fill="#fff">
        <use xlinkHref="#person-pin-circle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#person-pin-circle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPersonPinCircle
