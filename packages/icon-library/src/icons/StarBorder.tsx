import React, { SVGProps } from 'react'

const SvgStarBorder = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="star-border_svg__a"
        d="M14.667 6.16l-4.794-.413L8 1.333l-1.873 4.42-4.794.407 3.64 3.153L3.88 14 8 11.513 12.12 14l-1.087-4.687 3.634-3.153zM8 10.267L5.493 11.78l.667-2.853-2.213-1.92 2.92-.254L8 4.067 9.14 6.76l2.92.253-2.213 1.92.666 2.854L8 10.267z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="star-border_svg__b" fill="#fff">
        <use xlinkHref="#star-border_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#star-border_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStarBorder
