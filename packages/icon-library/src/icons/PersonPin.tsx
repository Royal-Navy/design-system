import React, { SVGProps } from 'react'

const SvgPersonPin = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="person-pin_svg__a"
        d="M12.667 1.333H3.333c-.74 0-1.333.6-1.333 1.334V12c0 .733.593 1.333 1.333 1.333H6l2 2 2-2h2.667c.733 0 1.333-.6 1.333-1.333V2.667c0-.734-.6-1.334-1.333-1.334zM8 3.533a1.801 1.801 0 010 3.6 1.801 1.801 0 010-3.6zm4 7.134H4v-.6C4 8.733 6.667 8 8 8c1.333 0 4 .733 4 2.067v.6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="person-pin_svg__b" fill="#fff">
        <use xlinkHref="#person-pin_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#person-pin_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPersonPin
