import React, { SVGProps } from 'react'

const SvgSave = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="save_svg__a"
        d="M11.333 2h-8C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667v-8L11.333 2zM8 12.667c-1.107 0-2-.894-2-2 0-1.107.893-2 2-2s2 .893 2 2c0 1.106-.893 2-2 2zM10 6H3.333V3.333H10V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="save_svg__b" fill="#fff">
        <use xlinkHref="#save_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#save_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSave
