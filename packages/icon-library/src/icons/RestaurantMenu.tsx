import React, { SVGProps } from 'react'

const SvgRestaurantMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="restaurant-menu_svg__a"
        d="M5.4 8.893l1.887-1.886-4.68-4.674a2.672 2.672 0 000 3.774L5.4 8.893zm4.52-1.206c1.02.473 2.453.14 3.513-.92 1.274-1.274 1.52-3.1.54-4.08-.973-.974-2.8-.734-4.08.54-1.06 1.06-1.393 2.493-.92 3.513l-6.506 6.507.94.94L8 9.607l4.587 4.586.94-.94L8.94 8.667l.98-.98z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="restaurant-menu_svg__b" fill="#fff">
        <use xlinkHref="#restaurant-menu_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#restaurant-menu_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRestaurantMenu
