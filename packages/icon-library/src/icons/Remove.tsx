import React, { SVGProps } from 'react'

const SvgRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="remove_svg__a" d="M12.667 8.667H3.333V7.333h9.334z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="remove_svg__b" fill="#fff">
        <use xlinkHref="#remove_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#remove_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRemove
