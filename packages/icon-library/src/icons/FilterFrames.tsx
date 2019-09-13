import React, { SVGProps } from 'react'

const SvgFilterFrames = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-frames_svg__a"
        d="M13.333 2.667h-2.666L8 0 5.333 2.667H2.667c-.734 0-1.334.6-1.334 1.333v9.333c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V4c0-.733-.6-1.333-1.334-1.333zm0 10.666H2.667V4H5.68l2.347-2.333L10.347 4h2.986v9.333zm-1.333-8H4V12h8V5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-frames_svg__b" fill="#fff">
        <use xlinkHref="#filter-frames_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-frames_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterFrames
