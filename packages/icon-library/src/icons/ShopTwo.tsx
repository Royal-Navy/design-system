import React, { SVGProps } from 'react'

const SvgShopTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="shop-two_svg__a"
        d="M2 6H.667v7.333c0 .74.593 1.334 1.333 1.334h9.333c.74 0 1.334-.594 1.334-1.334H2V6zm10-2.667V2c0-.74-.593-1.333-1.333-1.333H8C7.26.667 6.667 1.26 6.667 2v1.333H3.333v7.334c0 .74.594 1.333 1.334 1.333H14c.74 0 1.333-.593 1.333-1.333V3.333H12zM8 2h2.667v1.333H8V2zm0 8V5.333l3.667 2L8 10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="shop-two_svg__b" fill="#fff">
        <use xlinkHref="#shop-two_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#shop-two_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShopTwo
