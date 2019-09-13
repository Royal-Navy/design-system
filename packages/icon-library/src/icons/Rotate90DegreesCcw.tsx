import React, { SVGProps } from 'react'

const SvgRotate90DegreesCcw = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rotate-90-degrees-ccw_svg__a"
        d="M4.893 4.273L.573 8.6 4.9 12.92 9.227 8.6 4.893 4.273zM2.46 8.6L4.9 6.16 7.333 8.6l-2.44 2.44L2.46 8.6zm10.447-4.173a5.966 5.966 0 00-4.24-1.76V.507L5.84 3.333 8.667 6.16V4c1.193 0 2.386.453 3.3 1.367a4.672 4.672 0 010 6.6 4.649 4.649 0 01-5.194.96l-.993.993c.9.493 1.893.747 2.887.747a5.966 5.966 0 004.24-1.76 5.987 5.987 0 000-8.48z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rotate-90-degrees-ccw_svg__b" fill="#fff">
        <use xlinkHref="#rotate-90-degrees-ccw_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rotate-90-degrees-ccw_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRotate90DegreesCcw
