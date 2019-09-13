import React, { SVGProps } from 'react'

const SvgFormatColorText = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-color-text_svg__a"
        d="M0 13.333h16V16H0v-2.667zM8.889.89l3.991 10.667h-1.778l-.995-2.667H5.884l-.995 2.667H3.11l4-10.667H8.89zM6.56 7.11h2.88L8 3.262l-1.44 3.85z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-color-text_svg__b" fill="#fff">
        <use xlinkHref="#format-color-text_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-color-text_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatColorText
