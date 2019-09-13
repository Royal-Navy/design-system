import React, { SVGProps } from 'react'

const SvgDeveloperBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="developer-board_svg__a"
        d="M14.667 6V4.667h-1.334V3.333C13.333 2.6 12.733 2 12 2H2.667c-.734 0-1.334.6-1.334 1.333v9.334c0 .733.6 1.333 1.334 1.333H12c.733 0 1.333-.6 1.333-1.333v-1.334h1.334V10h-1.334V8.667h1.334V7.333h-1.334V6h1.334zM12 12.667H2.667V3.333H12v9.334zm-8-4h3.333v2.666H4V8.667zm4-4h2.667v2H8v-2zm-4 0h3.333V8H4V4.667zm4 2.666h2.667v4H8v-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="developer-board_svg__b" fill="#fff">
        <use xlinkHref="#developer-board_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#developer-board_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDeveloperBoard
