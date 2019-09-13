import React, { SVGProps } from 'react'

const SvgWidgets = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="widgets_svg__a"
        d="M8.889 8.889v5.333h5.333V8.89H8.89zM1.778 7.11H7.11V1.778H1.778V7.11zm0 7.111H7.11V8.89H1.778v5.333zm7.11 0h5.334V8.89H8.89v5.333zm6.445-9.778L11.556.667 7.778 4.444l3.778 3.778 3.777-3.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="widgets_svg__b" fill="#fff">
        <use xlinkHref="#widgets_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#widgets_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWidgets
