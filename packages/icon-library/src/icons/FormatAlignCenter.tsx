import React, { SVGProps } from 'react'

const SvgFormatAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-align-center_svg__a"
        d="M3.556 12.444v1.778h8.888v-1.778H3.556zm0-7.11V7.11h8.888V5.333H3.556zm-1.778 5.333h12.444V8.889H1.778v1.778zm0-8.89v1.779h12.444V1.778H1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-align-center_svg__b" fill="#fff">
        <use xlinkHref="#format-align-center_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-align-center_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatAlignCenter
