import React, { SVGProps } from 'react'

const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="equalizer_svg__a"
        d="M6.667 13.333h2.666V2.667H6.667v10.666zm-4 0h2.666V8H2.667v5.333zm8-7.333v7.333h2.666V6h-2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="equalizer_svg__b" fill="#fff">
        <use xlinkHref="#equalizer_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#equalizer_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEqualizer
