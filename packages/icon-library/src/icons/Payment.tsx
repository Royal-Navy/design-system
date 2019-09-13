import React, { SVGProps } from 'react'

const SvgPayment = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="payment_svg__a"
        d="M13.333 2.667H2.667c-.74 0-1.327.593-1.327 1.333l-.007 8c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V4c0-.74-.594-1.333-1.334-1.333zm0 9.333H2.667V8h10.666v4zm0-6.667H2.667V4h10.666v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="payment_svg__b" fill="#fff">
        <use xlinkHref="#payment_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#payment_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPayment
