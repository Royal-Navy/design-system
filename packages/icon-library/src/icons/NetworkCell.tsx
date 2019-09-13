import React, { SVGProps } from 'react'

const SvgNetworkCell = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="network-cell_svg__a" d="M.889 14.222L14.222.89v13.333H.89z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="network-cell_svg__b" fill="#fff">
        <use xlinkHref="#network-cell_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#network-cell_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNetworkCell
