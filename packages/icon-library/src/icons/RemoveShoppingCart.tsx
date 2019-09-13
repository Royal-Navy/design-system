import React, { SVGProps } from 'react'

const SvgRemoveShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="remove-shopping-cart_svg__a"
        d="M15.153 15.153L1.847 1.847l-.514-.514L.847.847 0 1.693 2.927 4.62 4.4 7.727 3.5 9.36a1.289 1.289 0 00-.167.64c0 .733.6 1.333 1.334 1.333H9.64l.92.92a1.332 1.332 0 00.773 2.413c.447 0 .84-.22 1.08-.56L14.307 16l.846-.847zM4.947 10a.165.165 0 01-.167-.167l.02-.08.6-1.086h1.573L8.307 10h-3.36zm5.42-1.333c.5 0 .94-.274 1.166-.687l2.387-4.327a.669.669 0 00-.587-.987H4.36l6.007 6zM4.667 12c-.734 0-1.327.6-1.327 1.333 0 .734.593 1.334 1.327 1.334.733 0 1.333-.6 1.333-1.334C6 12.6 5.4 12 4.667 12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="remove-shopping-cart_svg__b" fill="#fff">
        <use xlinkHref="#remove-shopping-cart_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#remove-shopping-cart_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRemoveShoppingCart
