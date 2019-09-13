import React, { SVGProps } from 'react'

const SvgLowPriority = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="low-priority_svg__a"
        d="M9.333 3.333h5.334v1.334H9.333V3.333zm0 3.667h5.334v1.333H9.333V7zm0 3.667h5.334V12H9.333v-1.333zm-8-3A4.342 4.342 0 005.667 12H6v1.333l2-2-2-2v1.334h-.333c-1.654 0-3-1.347-3-3 0-1.654 1.346-3 3-3H8V3.333H5.667a4.342 4.342 0 00-4.334 4.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="low-priority_svg__b" fill="#fff">
        <use xlinkHref="#low-priority_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#low-priority_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLowPriority
