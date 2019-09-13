import React, { SVGProps } from 'react'

const SvgDiscFull = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="disc-full_svg__a"
        d="M13.333 10.667h1.334V9.333h-1.334v1.334zm0-6V8h1.334V4.667h-1.334zm-6.666-2A5.332 5.332 0 001.333 8a5.332 5.332 0 005.334 5.333A5.332 5.332 0 0012 8a5.332 5.332 0 00-5.333-5.333zm0 6.666c-.734 0-1.334-.6-1.334-1.333s.6-1.333 1.334-1.333C7.4 6.667 8 7.267 8 8s-.6 1.333-1.333 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="disc-full_svg__b" fill="#fff">
        <use xlinkHref="#disc-full_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#disc-full_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDiscFull
