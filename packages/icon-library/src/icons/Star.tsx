import React, { SVGProps } from 'react'

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="star_svg__a"
        d="M8 11.513L12.12 14l-1.093-4.687 3.64-3.153-4.794-.407L8 1.333l-1.873 4.42-4.794.407 3.64 3.153L3.88 14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="star_svg__b" fill="#fff">
        <use xlinkHref="#star_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#star_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStar
