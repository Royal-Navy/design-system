import React, { SVGProps } from 'react'

const SvgRedeem = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="redeem_svg__a"
        d="M13.333 4H11.88c.073-.207.12-.433.12-.667a1.997 1.997 0 00-3.667-1.1L8 2.68l-.333-.453A2.008 2.008 0 006 1.333c-1.107 0-2 .894-2 2 0 .234.047.46.12.667H2.667c-.74 0-1.327.593-1.327 1.333l-.007 7.334c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V5.333c0-.74-.594-1.333-1.334-1.333zM10 2.667c.367 0 .667.3.667.666 0 .367-.3.667-.667.667a.669.669 0 01-.667-.667c0-.366.3-.666.667-.666zm-4 0c.367 0 .667.3.667.666C6.667 3.7 6.367 4 6 4a.669.669 0 01-.667-.667c0-.366.3-.666.667-.666zm7.333 10H2.667v-1.334h10.666v1.334zm0-3.334H2.667v-4h3.386L4.667 7.22l1.08.78 1.586-2.16L8 4.933l.667.907L10.253 8l1.08-.78-1.386-1.887h3.386v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="redeem_svg__b" fill="#fff">
        <use xlinkHref="#redeem_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#redeem_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRedeem
