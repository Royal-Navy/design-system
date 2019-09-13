import React, { SVGProps } from 'react'

const SvgFormatIndentIncrease = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-indent-increase_svg__a"
        d="M7.111 10.667h7.111V8.889h-7.11v1.778zM4.89 8L1.778 4.889v6.222L4.888 8zm-3.111 6.222h12.444v-1.778H1.778v1.778zm0-12.444v1.778h12.444V1.778H1.778zM7.11 7.11h7.111V5.333h-7.11v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-indent-increase_svg__b" fill="#fff">
        <use xlinkHref="#format-indent-increase_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-indent-increase_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatIndentIncrease
