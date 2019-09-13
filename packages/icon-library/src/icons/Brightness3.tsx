import React, { SVGProps } from 'react'

const SvgBrightness3 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="brightness-3_svg__a"
        d="M6 1.333c-.7 0-1.367.107-2 .307A6.661 6.661 0 018.667 8 6.661 6.661 0 014 14.36 6.67 6.67 0 0012.667 8 6.67 6.67 0 006 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brightness-3_svg__b" fill="#fff">
        <use xlinkHref="#brightness-3_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brightness-3_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrightness3
