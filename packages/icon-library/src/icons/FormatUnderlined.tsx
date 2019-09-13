import React, { SVGProps } from 'react'

const SvgFormatUnderlined = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="format-underlined_svg__a"
        d="M8 11.556a4.446 4.446 0 004.444-4.445V.89h-2.222V7.11a2.223 2.223 0 01-4.444 0V.89H3.556V7.11A4.446 4.446 0 008 11.556zm-5.333 1.777v1.778h10.666v-1.778H2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-underlined_svg__b" fill="#fff">
        <use xlinkHref="#format-underlined_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#format-underlined_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFormatUnderlined
