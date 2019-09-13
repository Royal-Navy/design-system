import React, { SVGProps } from 'react'

const SvgPauseCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pause-circle-filled_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm-.667 9.334H6V5.333h1.333v5.334zm2.667 0H8.667V5.333H10v5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pause-circle-filled_svg__b" fill="#fff">
        <use xlinkHref="#pause-circle-filled_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pause-circle-filled_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPauseCircleFilled
