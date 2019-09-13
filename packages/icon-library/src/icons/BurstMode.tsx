import React, { SVGProps } from 'react'

const SvgBurstMode = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="burst-mode_svg__a"
        d="M.667 3.333H2v9.334H.667V3.333zm2.666 0h1.334v9.334H3.333V3.333zm11.334 0h-8C6.3 3.333 6 3.633 6 4v8c0 .367.3.667.667.667h8c.366 0 .666-.3.666-.667V4c0-.367-.3-.667-.666-.667zm-7.334 8L9 9.233l1.193 1.434L11.86 8.52 14 11.333H7.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="burst-mode_svg__b" fill="#fff">
        <use xlinkHref="#burst-mode_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#burst-mode_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBurstMode
