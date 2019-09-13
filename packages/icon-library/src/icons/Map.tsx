import React, { SVGProps } from 'react'

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="map_svg__a"
        d="M13.667 2l-.107.02L10 3.4 6 2 2.24 3.267a.336.336 0 00-.24.32v10.08a.33.33 0 00.333.333l.107-.02L6 12.6l4 1.4 3.76-1.267a.336.336 0 00.24-.32V2.333A.33.33 0 0013.667 2zM10 12.667L6 11.26V3.333l4 1.407v7.927z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="map_svg__b" fill="#fff">
        <use xlinkHref="#map_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#map_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMap
