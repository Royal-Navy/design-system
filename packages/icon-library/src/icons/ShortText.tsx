import React, { SVGProps } from 'react'

const SvgShortText = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="short-text_svg__a"
        d="M2.667 6h10.666v1.333H2.667V6zm0 2.667h6.666V10H2.667V8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="short-text_svg__b" fill="#fff">
        <use xlinkHref="#short-text_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#short-text_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShortText
