import React, { SVGProps } from 'react'

const SvgViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-week_svg__a"
        d="M4 3.333H2c-.367 0-.667.3-.667.667v8c0 .367.3.667.667.667h2c.367 0 .667-.3.667-.667V4c0-.367-.3-.667-.667-.667zm9.333 0h-2c-.366 0-.666.3-.666.667v8c0 .367.3.667.666.667h2c.367 0 .667-.3.667-.667V4c0-.367-.3-.667-.667-.667zm-4.666 0h-2C6.3 3.333 6 3.633 6 4v8c0 .367.3.667.667.667h2c.366 0 .666-.3.666-.667V4c0-.367-.3-.667-.666-.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-week_svg__b" fill="#fff">
        <use xlinkHref="#view-week_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-week_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewWeek
