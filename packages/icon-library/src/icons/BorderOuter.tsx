import React, { SVGProps } from 'react'

const SvgBorderOuter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-outer_svg__a"
        d="M8.889 4.444H7.11v1.778H8.89V4.444zm2.667 2.667H9.778V8.89h1.778V7.11zm-2.667 0H7.11V8.89H8.89V7.11zm0 2.667H7.11v1.778H8.89V9.778zM6.222 7.11H4.444V8.89h1.778V7.11zM1.778 1.778v12.444h12.444V1.778H1.778zm10.666 10.666H3.556V3.556h8.888v8.888z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-outer_svg__b" fill="#fff">
        <use xlinkHref="#border-outer_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-outer_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderOuter
