import React, { SVGProps } from 'react'

const SvgPublic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="public_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm-.667 11.954A5.326 5.326 0 012.667 8c0-.413.053-.807.14-1.193L6 10v.667C6 11.4 6.6 12 7.333 12v1.287zm4.6-1.694a1.323 1.323 0 00-1.266-.926H10v-2C10 8.3 9.7 8 9.333 8h-4V6.667h1.334c.366 0 .666-.3.666-.667V4.667h1.334c.733 0 1.333-.6 1.333-1.334V3.06A5.336 5.336 0 0113.333 8a5.305 5.305 0 01-1.4 3.593z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="public_svg__b" fill="#fff">
        <use xlinkHref="#public_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#public_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPublic
