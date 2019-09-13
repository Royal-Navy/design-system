import React, { SVGProps } from 'react'

const SvgStorage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="storage_svg__a"
        d="M1.333 13.333h13.334v-2.666H1.333v2.666zm1.334-2H4v1.334H2.667v-1.334zM1.333 2.667v2.666h13.334V2.667H1.333zm2.667 2H2.667V3.333H4v1.334zM1.333 9.333h13.334V6.667H1.333v2.666zm1.334-2H4v1.334H2.667V7.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="storage_svg__b" fill="#fff">
        <use xlinkHref="#storage_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#storage_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStorage
