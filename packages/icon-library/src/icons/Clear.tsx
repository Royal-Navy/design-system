import React, { SVGProps } from 'react'

const SvgClear = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="clear_svg__a"
        d="M12.667 4.273l-.94-.94L8 7.06 4.273 3.333l-.94.94L7.06 8l-3.727 3.727.94.94L8 8.94l3.727 3.727.94-.94L8.94 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="clear_svg__b" fill="#fff">
        <use xlinkHref="#clear_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#clear_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgClear
