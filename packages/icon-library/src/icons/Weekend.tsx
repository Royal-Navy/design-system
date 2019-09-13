import React, { SVGProps } from 'react'

const SvgWeekend = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="weekend_svg__a"
        d="M14 6.667c-.733 0-1.333.6-1.333 1.333v2H3.333V8c0-.733-.6-1.333-1.333-1.333S.667 7.267.667 8v3.333c0 .734.6 1.334 1.333 1.334h12c.733 0 1.333-.6 1.333-1.334V8c0-.733-.6-1.333-1.333-1.333zm-2-3.334H4c-.733 0-1.333.6-1.333 1.334V6.1A1.994 1.994 0 014 7.98v1.353h8V7.98c0-.867.56-1.6 1.333-1.88V4.667c0-.734-.6-1.334-1.333-1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="weekend_svg__b" fill="#fff">
        <use xlinkHref="#weekend_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#weekend_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWeekend
