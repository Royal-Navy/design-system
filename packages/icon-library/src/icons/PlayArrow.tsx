import React, { SVGProps } from 'react'

const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="play-arrow_svg__a" d="M5.333 3.333v9.334L12.667 8z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="play-arrow_svg__b" fill="#fff">
        <use xlinkHref="#play-arrow_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#play-arrow_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlayArrow
