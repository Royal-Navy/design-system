import React, { SVGProps } from 'react'

const SvgToys = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="toys_svg__a"
        d="M8 8c0-2 1.667-3.667 3.667-3.667 2 0 3.666 1.667 3.666 3.667H8zm0 0c0 2-1.667 3.667-3.667 3.667C2.333 11.667.667 10 .667 8H8zm0 0C6 8 4.333 6.333 4.333 4.333 4.333 2.333 6 .667 8 .667V8zm0 0c2 0 3.667 1.667 3.667 3.667 0 2-1.667 3.666-3.667 3.666V8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="toys_svg__b" fill="#fff">
        <use xlinkHref="#toys_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#toys_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgToys
