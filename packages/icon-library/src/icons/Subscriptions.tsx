import React, { SVGProps } from 'react'

const SvgSubscriptions = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="subscriptions_svg__a"
        d="M13.333 5.333H2.667V4h10.666v1.333zm-1.333-4H4v1.334h8V1.333zM14.667 8v5.333c0 .734-.6 1.334-1.334 1.334H2.667c-.734 0-1.334-.6-1.334-1.334V8c0-.733.6-1.333 1.334-1.333h10.666c.734 0 1.334.6 1.334 1.333zm-4 2.667l-4-2.18v4.353l4-2.173z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="subscriptions_svg__b" fill="#fff">
        <use xlinkHref="#subscriptions_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#subscriptions_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSubscriptions
