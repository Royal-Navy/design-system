import React, { SVGProps } from 'react'

const SvgGpsNotFixed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="gps-not-fixed_svg__a"
        d="M13.96 7.333A5.996 5.996 0 008.667 2.04V.667H7.333V2.04A5.996 5.996 0 002.04 7.333H.667v1.334H2.04a5.996 5.996 0 005.293 5.293v1.373h1.334V13.96a5.996 5.996 0 005.293-5.293h1.373V7.333H13.96zM8 12.667A4.663 4.663 0 013.333 8 4.663 4.663 0 018 3.333 4.663 4.663 0 0112.667 8 4.663 4.663 0 018 12.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gps-not-fixed_svg__b" fill="#fff">
        <use xlinkHref="#gps-not-fixed_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#gps-not-fixed_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGpsNotFixed
