import React, { SVGProps } from 'react'

const SvgFreeBreakfast = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="free-breakfast_svg__a"
        d="M13.333 2H2.667v6.667a2.666 2.666 0 002.666 2.666h4A2.666 2.666 0 0012 8.667v-2h1.333c.74 0 1.334-.6 1.334-1.334v-2c0-.74-.594-1.333-1.334-1.333zm0 3.333H12v-2h1.333v2zM2.667 12.667h10.666V14H2.667v-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="free-breakfast_svg__b" fill="#fff">
        <use xlinkHref="#free-breakfast_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#free-breakfast_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFreeBreakfast
