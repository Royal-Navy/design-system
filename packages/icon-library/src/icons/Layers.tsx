import React, { SVGProps } from 'react'

const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="layers_svg__a"
        d="M7.993 12.36L3.08 8.54 2 9.38l6 4.667 6-4.667-1.087-.847-4.92 3.827zM8 10.667l4.907-3.82L14 6 8 1.333 2 6l1.087.847L8 10.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="layers_svg__b" fill="#fff">
        <use xlinkHref="#layers_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#layers_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLayers
