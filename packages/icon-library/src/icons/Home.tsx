import React, { SVGProps } from 'react'

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="home_svg__a"
        d="M6.667 13.333v-4h2.666v4h3.334V8h2L8 2 1.333 8h2v5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="home_svg__b" fill="#fff">
        <use xlinkHref="#home_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#home_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHome
