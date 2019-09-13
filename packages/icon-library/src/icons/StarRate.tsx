import React, { SVGProps } from 'react'

const SvgStarRate = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="star-rate_svg__a"
        d="M8 10.044l3.298 2.4-1.262-3.875 3.297-2.347H9.289L8 2.222l-1.289 4H2.667l3.297 2.347-1.262 3.875z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="star-rate_svg__b" fill="#fff">
        <use xlinkHref="#star-rate_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#star-rate_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStarRate
