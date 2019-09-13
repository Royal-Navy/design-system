import React, { SVGProps } from 'react'

const SvgSignalCellular2Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-cellular-2-bar_svg__a"
        d="M.889 14.222L14.222.89v13.333H.89zm0 0h8v-8l-8 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-2-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-2-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-cellular-2-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellular2Bar
