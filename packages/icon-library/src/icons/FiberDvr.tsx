import React, { SVGProps } from 'react'

const SvgFiberDvr = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fiber-dvr_svg__a"
        d="M11.667 7H13v.667h-1.333V7zM3 7h1.333v2H3V7zm11-5H2C1.26 2 .667 2.593.667 3.333v9.334C.667 13.4 1.26 14 2 14h12c.74 0 1.333-.6 1.333-1.333V3.333C15.333 2.593 14.74 2 14 2zM5.333 9c0 .567-.433 1-1 1H2V6h2.333c.567 0 1 .433 1 1v2zm3.08 1h-1L6.247 6h1l.666 2.287L8.58 6h1l-1.167 4zM14 7.667c0 .4-.267.766-.6.933L14 10h-1l-.567-1.333h-.766V10h-1V6H13c.567 0 1 .433 1 1v.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fiber-dvr_svg__b" fill="#fff">
        <use xlinkHref="#fiber-dvr_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fiber-dvr_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFiberDvr
