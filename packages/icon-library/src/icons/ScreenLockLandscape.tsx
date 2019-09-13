import React, { SVGProps } from 'react'

const SvgScreenLockLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="screen-lock-landscape_svg__a"
        d="M14 3.333H2c-.733 0-1.333.6-1.333 1.334v6.666c0 .734.6 1.334 1.333 1.334h12c.733 0 1.333-.6 1.333-1.334V4.667c0-.734-.6-1.334-1.333-1.334zm-1.333 8H3.333V4.667h9.334v6.666zm-6-.666h2.666c.367 0 .667-.3.667-.667V8c0-.367-.3-.667-.667-.667v-.666a1.333 1.333 0 10-2.666 0v.666C6.3 7.333 6 7.633 6 8v2c0 .367.3.667.667.667zm.533-4c0-.44.36-.8.8-.8.44 0 .8.36.8.8v.666H7.2v-.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="screen-lock-landscape_svg__b" fill="#fff">
        <use xlinkHref="#screen-lock-landscape_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#screen-lock-landscape_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgScreenLockLandscape
