import React, { SVGProps } from 'react'

const SvgAirlineSeatIndividualSuite = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="airline-seat-individual-suite_svg__a"
        d="M4.667 8.667c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8-4H7.333v4.666H2V4.667H.667v6.666h14.666v-4a2.666 2.666 0 00-2.666-2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="airline-seat-individual-suite_svg__b" fill="#fff">
        <use xlinkHref="#airline-seat-individual-suite_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#airline-seat-individual-suite_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAirlineSeatIndividualSuite
