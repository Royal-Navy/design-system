import React, { SVGProps } from 'react'

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="check-circle_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm-1.333 10L3.333 8l.94-.94 2.394 2.387 5.06-5.06.94.946-6 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="check-circle_svg__b" fill="#fff">
        <use xlinkHref="#check-circle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#check-circle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCheckCircle
