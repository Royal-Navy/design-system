import React, { SVGProps } from 'react'

const SvgSwapVerticalCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="swap-vertical-circle_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zM4.333 6l2.334-2.333L9 6H7.333v2.667H6V6H4.333zm7.334 4l-2.334 2.333L7 10h1.667V7.333H10V10h1.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="swap-vertical-circle_svg__b" fill="#fff">
        <use xlinkHref="#swap-vertical-circle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#swap-vertical-circle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSwapVerticalCircle
