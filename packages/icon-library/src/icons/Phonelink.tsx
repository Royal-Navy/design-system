import React, { SVGProps } from 'react'

const SvgPhonelink = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phonelink_svg__a"
        d="M2.667 4h12V2.667h-12c-.734 0-1.334.6-1.334 1.333v7.333H0v2h9.333v-2H2.667V4zm12.666 1.333h-4c-.366 0-.666.3-.666.667v6.667c0 .366.3.666.666.666h4c.367 0 .667-.3.667-.666V6c0-.367-.3-.667-.667-.667zm-.666 6H12V6.667h2.667v4.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phonelink_svg__b" fill="#fff">
        <use xlinkHref="#phonelink_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phonelink_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhonelink
