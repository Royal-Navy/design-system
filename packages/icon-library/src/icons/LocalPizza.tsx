import React, { SVGProps } from 'react'

const SvgLocalPizza = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-pizza_svg__a"
        d="M8 1.333A8.041 8.041 0 002.007 4L8 14.667 13.993 4A8.055 8.055 0 008 1.333zM4.667 4.667c0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334C7.333 5.4 6.733 6 6 6s-1.333-.6-1.333-1.333zM8 10c-.733 0-1.333-.6-1.333-1.333 0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334C9.333 9.4 8.733 10 8 10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-pizza_svg__b" fill="#fff">
        <use xlinkHref="#local-pizza_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-pizza_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalPizza
