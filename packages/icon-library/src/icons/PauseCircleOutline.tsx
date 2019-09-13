import React, { SVGProps } from 'react'

const SvgPauseCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pause-circle-outline_svg__a"
        d="M6 10.667h1.333V5.333H6v5.334zm2-9.334A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333zm.667-2.666H10V5.333H8.667v5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pause-circle-outline_svg__b" fill="#fff">
        <use xlinkHref="#pause-circle-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pause-circle-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPauseCircleOutline
