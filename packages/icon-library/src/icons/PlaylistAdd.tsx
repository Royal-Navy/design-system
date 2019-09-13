import React, { SVGProps } from 'react'

const SvgPlaylistAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="playlist-add_svg__a"
        d="M9.333 6.667h-8V8h8V6.667zm0-2.667h-8v1.333h8V4zM12 9.333V6.667h-1.333v2.666H8v1.334h2.667v2.666H12v-2.666h2.667V9.333H12zM1.333 10.667h5.334V9.333H1.333v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="playlist-add_svg__b" fill="#fff">
        <use xlinkHref="#playlist-add_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#playlist-add_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlaylistAdd
