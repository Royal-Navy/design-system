import React, { SVGProps } from 'react'

const SvgPlayForWork = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="play-for-work_svg__a"
        d="M7.333 3.333V7.06H5l3 3 3-3H8.667V3.333H7.333zM4 9.333c0 2.207 1.793 4 4 4s4-1.793 4-4h-1.333a2.666 2.666 0 11-5.334 0H4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="play-for-work_svg__b" fill="#fff">
        <use xlinkHref="#play-for-work_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#play-for-work_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlayForWork
