import React, { SVGProps } from 'react'

const SvgShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="shopping-basket_svg__a"
        d="M11.473 6l-2.92-4.373A.662.662 0 008 1.347a.652.652 0 00-.553.286L4.527 6H1.333a.669.669 0 00-.64.847l1.694 6.18c.153.56.666.973 1.28.973h8.666a1.34 1.34 0 001.287-.973l1.693-6.18.02-.18c0-.367-.3-.667-.666-.667h-3.194zM6 6l2-2.933L10 6H6zm2 5.333c-.733 0-1.333-.6-1.333-1.333S7.267 8.667 8 8.667s1.333.6 1.333 1.333-.6 1.333-1.333 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="shopping-basket_svg__b" fill="#fff">
        <use xlinkHref="#shopping-basket_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#shopping-basket_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShoppingBasket
