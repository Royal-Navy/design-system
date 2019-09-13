import React, { SVGProps } from 'react'

const SvgViewCarousel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-carousel_svg__a"
        d="M4.667 12.667h6.666v-10H4.667v10zm-3.334-1.334H4V4H1.333v7.333zM12 4v7.333h2.667V4H12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-carousel_svg__b" fill="#fff">
        <use xlinkHref="#view-carousel_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-carousel_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewCarousel
