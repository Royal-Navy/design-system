import React, { SVGProps } from 'react'

const SvgBusinessCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="business-center_svg__a"
        d="M6.667 10.667V10h-4.66L2 12.667C2 13.407 2.593 14 3.333 14h9.334c.74 0 1.333-.593 1.333-1.333V10H9.333v.667H6.667zm6.666-6H10.66V3.333L9.327 2H6.66L5.327 3.333v1.334h-2.66c-.734 0-1.334.6-1.334 1.333v2c0 .74.594 1.333 1.334 1.333h4V8h2.666v1.333h4c.734 0 1.334-.6 1.334-1.333V6c0-.733-.6-1.333-1.334-1.333zm-4 0H6.667V3.333h2.666v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="business-center_svg__b" fill="#fff">
        <use xlinkHref="#business-center_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#business-center_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBusinessCenter
