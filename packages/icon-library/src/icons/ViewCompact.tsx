import React, { SVGProps } from 'react'

const SvgViewCompact = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-compact_svg__a"
        d="M2 12.667h4V8H2v4.667zm4.667 0h8V8h-8v4.667zM2 3.333v4h12.667v-4H2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-compact_svg__b" fill="#fff">
        <use xlinkHref="#view-compact_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-compact_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewCompact
