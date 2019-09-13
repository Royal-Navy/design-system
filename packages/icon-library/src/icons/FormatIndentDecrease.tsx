import React, { SVGProps } from 'react'

const SvgFormatIndentDecrease = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-indent-decrease_svg__a"
        d="M7.111 10.667h7.111V8.889h-7.11v1.778zm0-3.556h7.111V5.333h-7.11v1.778zm7.111 5.333H1.778v1.778h12.444v-1.778zM1.778 8l3.11 3.111V4.89L1.779 8zm0-6.222v1.778h12.444V1.778H1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-indent-decrease_svg__b" fill="#fff">
        <use xlinkHref="#format-indent-decrease_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-indent-decrease_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatIndentDecrease
