import React, { SVGProps } from 'react'

const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="shopping-cart_svg__a"
        d="M4.667 12c-.734 0-1.327.6-1.327 1.333 0 .734.593 1.334 1.327 1.334.733 0 1.333-.6 1.333-1.334C6 12.6 5.4 12 4.667 12zm-4-10.667v1.334H2l2.4 5.06-.9 1.633a1.289 1.289 0 00-.167.64c0 .733.6 1.333 1.334 1.333h8V10h-7.72a.165.165 0 01-.167-.167l.02-.08.6-1.086h4.967c.5 0 .94-.274 1.166-.687l2.387-4.327a.669.669 0 00-.587-.987h-9.86l-.626-1.333H.667zM11.333 12c-.733 0-1.326.6-1.326 1.333 0 .734.593 1.334 1.326 1.334.734 0 1.334-.6 1.334-1.334 0-.733-.6-1.333-1.334-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="shopping-cart_svg__b" fill="#fff">
        <use xlinkHref="#shopping-cart_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#shopping-cart_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShoppingCart
