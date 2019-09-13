import React, { SVGProps } from 'react'

const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="eject_svg__a"
        d="M3.333 11.333h9.334v1.334H3.333v-1.334zm4.667-8L3.553 10h8.894L8 3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="eject_svg__b" fill="#fff">
        <use xlinkHref="#eject_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#eject_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEject
