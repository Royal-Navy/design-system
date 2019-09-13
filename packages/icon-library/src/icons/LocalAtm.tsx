import React, { SVGProps } from 'react'

const SvgLocalAtm = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-atm_svg__a"
        d="M7.333 11.333h1.334v-.666h.666c.367 0 .667-.3.667-.667V8c0-.367-.3-.667-.667-.667h-2v-.666H10V5.333H8.667v-.666H7.333v.666h-.666C6.3 5.333 6 5.633 6 6v2c0 .367.3.667.667.667h2v.666H6v1.334h1.333v.666zm6-8.666H2.667c-.74 0-1.327.593-1.327 1.333l-.007 8c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V4c0-.74-.594-1.333-1.334-1.333zm0 9.333H2.667V4h10.666v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-atm_svg__b" fill="#fff">
        <use xlinkHref="#local-atm_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-atm_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalAtm
