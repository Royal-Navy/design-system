import React, { SVGProps } from 'react'

const SvgBrightness1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <circle id="brightness-1_svg__a" cx={8} cy={8} r={6.667} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brightness-1_svg__b" fill="#fff">
        <use xlinkHref="#brightness-1_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brightness-1_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrightness1
