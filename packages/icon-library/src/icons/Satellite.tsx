import React, { SVGProps } from 'react'

const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="satellite_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM3.333 3.327h2a2.003 2.003 0 01-2 2.006V3.327zm0 4.673V6.667a3.34 3.34 0 003.334-3.34H8A4.669 4.669 0 013.333 8zm0 4l2.334-3 1.666 2.007L9.667 8l3 4H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="satellite_svg__b" fill="#fff">
        <use xlinkHref="#satellite_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#satellite_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSatellite
