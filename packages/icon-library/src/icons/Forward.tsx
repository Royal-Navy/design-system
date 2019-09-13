import React, { SVGProps } from 'react'

const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="forward_svg__a"
        d="M8 5.333V2.667L13.333 8 8 13.333v-2.666H2.667V5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="forward_svg__b" fill="#fff">
        <use xlinkHref="#forward_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#forward_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgForward
