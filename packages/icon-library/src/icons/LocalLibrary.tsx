import React, { SVGProps } from 'react'

const SvgLocalLibrary = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-library_svg__a"
        d="M8 7.7a8.769 8.769 0 00-6-2.367v7.334c2.32 0 4.427.9 6 2.366a8.8 8.8 0 016-2.366V5.333c-2.32 0-4.427.9-6 2.367zm0-2.367c1.107 0 2-.893 2-2 0-1.106-.893-2-2-2s-2 .894-2 2c0 1.107.893 2 2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-library_svg__b" fill="#fff">
        <use xlinkHref="#local-library_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-library_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalLibrary
