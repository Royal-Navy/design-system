import React, { SVGProps } from 'react'

const SvgScreenLockPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="screen-lock-portrait_svg__a"
        d="M6.667 10.667h2.666c.367 0 .667-.3.667-.667V8c0-.367-.3-.667-.667-.667v-.666a1.333 1.333 0 10-2.666 0v.666C6.3 7.333 6 7.633 6 8v2c0 .367.3.667.667.667zm.533-4c0-.44.36-.8.8-.8.44 0 .8.36.8.8v.666H7.2v-.666zm4.133-6H4.667c-.734 0-1.334.6-1.334 1.333v12c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V2c0-.733-.6-1.333-1.334-1.333zm0 12H4.667V3.333h6.666v9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="screen-lock-portrait_svg__b" fill="#fff">
        <use xlinkHref="#screen-lock-portrait_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#screen-lock-portrait_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgScreenLockPortrait
