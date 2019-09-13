import React, { SVGProps } from 'react'

const SvgFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="favorite_svg__a"
        d="M8 14.233l-.967-.88c-3.433-3.113-5.7-5.166-5.7-7.686A3.631 3.631 0 015 2c1.16 0 2.273.54 3 1.393A3.992 3.992 0 0111 2a3.631 3.631 0 013.667 3.667c0 2.52-2.267 4.573-5.7 7.693L8 14.233z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="favorite_svg__b" fill="#fff">
        <use xlinkHref="#favorite_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#favorite_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFavorite
