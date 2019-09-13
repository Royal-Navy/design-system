import React, { SVGProps } from 'react'

const SvgFavoriteBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="favorite-border_svg__a"
        d="M11 2c-1.16 0-2.273.54-3 1.393A3.992 3.992 0 005 2a3.631 3.631 0 00-3.667 3.667c0 2.52 2.267 4.573 5.7 7.693l.967.873.967-.88c3.433-3.113 5.7-5.166 5.7-7.686A3.631 3.631 0 0011 2zM8.067 12.367L8 12.433l-.067-.066c-3.173-2.874-5.266-4.774-5.266-6.7 0-1.334 1-2.334 2.333-2.334 1.027 0 2.027.66 2.38 1.574h1.247C8.973 3.993 9.973 3.333 11 3.333c1.333 0 2.333 1 2.333 2.334 0 1.926-2.093 3.826-5.266 6.7z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="favorite-border_svg__b" fill="#fff">
        <use xlinkHref="#favorite-border_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#favorite-border_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFavoriteBorder
