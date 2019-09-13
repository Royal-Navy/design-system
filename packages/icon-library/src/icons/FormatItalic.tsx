import React, { SVGProps } from 'react'

const SvgFormatItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-italic_svg__a"
        d="M6.222 1.778v1.778h2.294l-3.254 7.111H2.667v1.777h7.111v-1.777H7.484l3.254-7.111h2.595V1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-italic_svg__b" fill="#fff">
        <use xlinkHref="#format-italic_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-italic_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatItalic
