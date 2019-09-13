import React, { SVGProps } from 'react'

const SvgRestaurant = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="restaurant_svg__a"
        d="M7.333 6H6V1.333H4.667V6H3.333V1.333H2V6a2.657 2.657 0 002.5 2.647v6.02h1.667v-6.02A2.657 2.657 0 008.667 6V1.333H7.333V6zm3.334-2v5.333h1.666v5.334H14V1.333c-1.84 0-3.333 1.494-3.333 2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="restaurant_svg__b" fill="#fff">
        <use xlinkHref="#restaurant_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#restaurant_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRestaurant
