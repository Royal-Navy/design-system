import React, { SVGProps } from 'react'

const SvgGpsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="gps-off_svg__a"
        d="M13.96 7.333A5.996 5.996 0 008.667 2.04V.667H7.333V2.04c-.753.08-1.46.307-2.106.647l1 1a4.663 4.663 0 016.093 6.08l1 1a6.03 6.03 0 00.647-2.1h1.366V7.333H13.96zM2 2.847l1.36 1.36a5.943 5.943 0 00-1.32 3.126H.667v1.334H2.04a5.996 5.996 0 005.293 5.293v1.373h1.334V13.96a5.996 5.996 0 003.126-1.32l1.36 1.36.847-.847L2.847 2 2 2.847zm8.847 8.846a4.663 4.663 0 01-6.54-6.54l6.54 6.54z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gps-off_svg__b" fill="#fff">
        <use xlinkHref="#gps-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#gps-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGpsOff
