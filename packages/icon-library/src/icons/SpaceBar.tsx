import React, { SVGProps } from 'react'

const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="space-bar_svg__a" d="M12 6v2.667H4V6H2.667v4h10.666V6z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="space-bar_svg__b" fill="#fff">
        <use xlinkHref="#space-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#space-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpaceBar
