import React, { SVGProps } from 'react'

const SvgFormatAlignJustify = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-align-justify_svg__a"
        d="M1.778 14.222h12.444v-1.778H1.778v1.778zm0-3.555h12.444V8.889H1.778v1.778zm0-8.89v1.779h12.444V1.778H1.778zm0 5.334h12.444V5.333H1.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-align-justify_svg__b" fill="#fff">
        <use xlinkHref="#format-align-justify_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-align-justify_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatAlignJustify
