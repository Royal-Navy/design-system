import React, { SVGProps } from 'react'

const SvgLineWeight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="line-weight_svg__a"
        d="M2 11.333h12V10H2v1.333zm0 2h12v-.666H2v.666zm0-4.666h12v-2H2v2zm0-6v2.666h12V2.667H2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="line-weight_svg__b" fill="#fff">
        <use xlinkHref="#line-weight_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#line-weight_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLineWeight
