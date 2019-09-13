import React, { SVGProps } from 'react'

const SvgConfirmationNumber = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="confirmation-number_svg__a"
        d="M14.667 6.667V4c0-.74-.6-1.333-1.334-1.333H2.667C1.933 2.667 1.34 3.26 1.34 4v2.667a1.333 1.333 0 01-.007 2.667V12c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V9.333c-.734 0-1.334-.6-1.334-1.333s.6-1.333 1.334-1.333zm-6 5H7.333v-1.334h1.334v1.334zm0-3H7.333V7.333h1.334v1.334zm0-3H7.333V4.333h1.334v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="confirmation-number_svg__b" fill="#fff">
        <use xlinkHref="#confirmation-number_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#confirmation-number_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgConfirmationNumber
