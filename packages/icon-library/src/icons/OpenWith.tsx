import React, { SVGProps } from 'react'

const SvgOpenWith = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="open-with_svg__a"
        d="M6.667 6h2.666V4h2L8 .667 4.667 4h2v2zM6 6.667H4v-2L.667 8 4 11.333v-2h2V6.667zM15.333 8L12 4.667v2h-2v2.666h2v2L15.333 8zm-6 2H6.667v2h-2L8 15.333 11.333 12h-2v-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="open-with_svg__b" fill="#fff">
        <use xlinkHref="#open-with_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#open-with_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgOpenWith
