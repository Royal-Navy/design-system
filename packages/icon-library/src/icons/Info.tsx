import React, { SVGProps } from 'react'

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="info_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm.667 10H7.333v-4h1.334v4zm0-5.333H7.333V4.667h1.334V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="info_svg__b" fill="#fff">
        <use xlinkHref="#info_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#info_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInfo
