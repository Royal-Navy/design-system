import React, { SVGProps } from 'react'

const SvgSignalCellular4Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="signal-cellular-4-bar_svg__a" d="M.889 14.222h13.333V.889z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-4-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-4-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-cellular-4-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellular4Bar
