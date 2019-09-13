import React, { SVGProps } from 'react'

const SvgSystemUpdateAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="system-update-alt_svg__a"
        d="M8 11l2.667-2.667h-2v-6H7.333v6h-2L8 11zm6-8.667h-4V3.66h4v9.353H2V3.66h4V2.333H2c-.733 0-1.333.6-1.333 1.334V13c0 .733.6 1.333 1.333 1.333h12c.733 0 1.333-.6 1.333-1.333V3.667c0-.734-.6-1.334-1.333-1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="system-update-alt_svg__b" fill="#fff">
        <use xlinkHref="#system-update-alt_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#system-update-alt_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSystemUpdateAlt
