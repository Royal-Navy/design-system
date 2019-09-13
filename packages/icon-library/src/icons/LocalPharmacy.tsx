import React, { SVGProps } from 'react'

const SvgLocalPharmacy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-pharmacy_svg__a"
        d="M14 3.333h-1.76L13 1.24 11.433.667l-.973 2.666H2v1.334l1.333 4-1.333 4V14h12v-1.333l-1.333-4 1.333-4V3.333zm-3.333 6h-2v2H7.333v-2h-2V8h2V6h1.334v2h2v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-pharmacy_svg__b" fill="#fff">
        <use xlinkHref="#local-pharmacy_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-pharmacy_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalPharmacy
