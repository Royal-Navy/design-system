import React, { SVGProps } from 'react'

const SvgAirlineSeatFlatAngled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-flat-angled_svg__a"
        d="M14.833 9.527l-.46 1.26-8.24-2.98L7.52 4.033l5.707 2.06c1.4.507 2.12 2.04 1.606 3.434zM1 8.093l4.333 1.56v3.014h5.334V11.58l3.013 1.087.46-1.26L1.46 6.833 1 8.093zM4.867 6.8a2.006 2.006 0 00.94-2.667A2.004 2.004 0 003.133 3.2 1.994 1.994 0 002.2 5.867a1.994 1.994 0 002.667.933z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-flat-angled_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-flat-angled_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-flat-angled_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatFlatAngled
