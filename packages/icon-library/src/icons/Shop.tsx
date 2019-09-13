import React, { SVGProps } from 'react'

const SvgShop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="shop_svg__a"
        d="M10.667 4V2.667c0-.74-.594-1.334-1.334-1.334H6.667c-.74 0-1.334.594-1.334 1.334V4h-4v8.667c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V4h-4zm-4-1.333h2.666V4H6.667V2.667zM6 12V6l5 2.667L6 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="shop_svg__b" fill="#fff">
        <use xlinkHref="#shop_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#shop_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShop
