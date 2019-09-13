import React, { SVGProps } from 'react'

const SvgArrowDropDownCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="arrow-drop-down-circle_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 8L5.333 6.667h5.334L8 9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-drop-down-circle_svg__b" fill="#fff">
        <use xlinkHref="#arrow-drop-down-circle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-drop-down-circle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowDropDownCircle
