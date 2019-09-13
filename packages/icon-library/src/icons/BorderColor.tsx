import React, { SVGProps } from 'react'

const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-color_svg__a"
        d="M.421 13.474H15.58V16H.42v-2.526zm11.267-8l-6.315 6.315H2.947V9.364l6.316-6.316 2.425 2.426zm2.08-2.089l-1.136 1.146-2.426-2.426L11.343.96a.417.417 0 01.598 0l1.827 1.827a.417.417 0 010 .598z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-color_svg__b" fill="#fff">
        <use xlinkHref="#border-color_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-color_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderColor
