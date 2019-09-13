import React, { SVGProps } from 'react'

const SvgFormatStrikethrough = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-strikethrough_svg__a"
        d="M7.111 13.333H8.89V9.778H7.11v3.555zM3.556 1.778v1.778H7.11v2.666H8.89V3.556h3.555V1.778H3.556zm-.89 7.11h10.667V7.112H2.667V8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-strikethrough_svg__b" fill="#fff">
        <use xlinkHref="#format-strikethrough_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-strikethrough_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatStrikethrough
