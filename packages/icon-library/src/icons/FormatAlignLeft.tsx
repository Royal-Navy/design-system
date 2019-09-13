import React, { SVGProps } from 'react'

const SvgFormatAlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-align-left_svg__a"
        d="M1.778 14.222h8.889v-1.778h-8.89v1.778zm8.889-8.889h-8.89v1.778h8.89V5.333zm-8.89-3.555v1.778h12.445V1.778H1.778zm0 8.889h12.445V8.889H1.778v1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-align-left_svg__b" fill="#fff">
        <use xlinkHref="#format-align-left_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-align-left_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatAlignLeft
