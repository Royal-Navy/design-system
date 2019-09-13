import React, { SVGProps } from 'react'

const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-size_svg__a"
        d="M.889 8h2.667v5.333h1.777V8H8V6.222H.889V8zm5.333-5.333v1.777h3.556v8.89h1.778v-8.89h3.555V2.667H6.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-size_svg__b" fill="#fff">
        <use xlinkHref="#format-size_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-size_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatSize
