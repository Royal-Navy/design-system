import React, { SVGProps } from 'react'

const SvgFormatTextdirectionLToR = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-textdirection-l-to-r_svg__a"
        d="M5.333 6.222v4.445h1.778v-8.89H8v8.89h1.778v-8.89h.889V.89H5.333a2.663 2.663 0 00-2.666 2.667 2.663 2.663 0 002.666 2.666zm8.89 7.111l-2.667-2.666v1.777H1.778v1.778h9.778V16l2.666-2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-textdirection-l-to-r_svg__b" fill="#fff">
        <use xlinkHref="#format-textdirection-l-to-r_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-textdirection-l-to-r_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatTextdirectionLToR
