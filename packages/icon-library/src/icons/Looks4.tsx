import React, { SVGProps } from 'react'

const SvgLooks4 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="looks-4_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM10 11.333H8.667V8.667H6v-4h1.333v2.666h1.334V4.667H10v6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="looks-4_svg__b" fill="#fff">
        <use xlinkHref="#looks-4_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#looks-4_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLooks4
