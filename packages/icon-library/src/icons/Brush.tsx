import React, { SVGProps } from 'react'

const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="brush_svg__a"
        d="M4.667 9.333c-1.107 0-2 .894-2 2 0 .874-.774 1.334-1.334 1.334C1.947 13.48 2.993 14 4 14a2.666 2.666 0 002.667-2.667c0-1.106-.894-2-2-2zm9.14-6.246l-.894-.894a.664.664 0 00-.94 0L6 8.167 7.833 10l5.974-5.973c.26-.26.26-.68 0-.94z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brush_svg__b" fill="#fff">
        <use xlinkHref="#brush_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brush_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrush
