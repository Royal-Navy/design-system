import React, { SVGProps } from 'react'

const SvgMusnote = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="musnote_svg__a"
        d="M8 2v7.033a2.665 2.665 0 00-1.333-.366 2.666 2.666 0 100 5.333 2.666 2.666 0 002.666-2.667V4.667H12V2H8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="musnote_svg__b" fill="#fff">
        <use xlinkHref="#musnote_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#musnote_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMusnote
