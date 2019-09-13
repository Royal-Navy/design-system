import React, { SVGProps } from 'react'

const SvgFormatAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-align-right_svg__a"
        d="M5.333 14.222h8.89v-1.778h-8.89v1.778zm-3.555-3.555h12.444V8.889H1.778v1.778zm0-8.89v1.779h12.444V1.778H1.778zm3.555 5.334h8.89V5.333h-8.89v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-align-right_svg__b" fill="#fff">
        <use xlinkHref="#format-align-right_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-align-right_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatAlignRight
