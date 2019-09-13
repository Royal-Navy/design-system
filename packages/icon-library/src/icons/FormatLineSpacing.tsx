import React, { SVGProps } from 'react'

const SvgFormatLineSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-line-spacing_svg__a"
        d="M8 13.333h8v-1.777H8v1.777zM8 2.667v1.777h8V2.667H8zM6.667 4.444l-3.111-3.11-3.112 3.11h2.223v7.112H.444l3.112 3.11 3.11-3.11H4.445V4.444h2.223zM8 8.89h8V7.11H8V8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-line-spacing_svg__b" fill="#fff">
        <use xlinkHref="#format-line-spacing_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-line-spacing_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatLineSpacing
