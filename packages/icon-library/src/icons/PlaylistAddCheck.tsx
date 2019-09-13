import React, { SVGProps } from 'react'

const SvgPlaylistAddCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="playlist-add-check_svg__a"
        d="M9.333 6.667h-8V8h8V6.667zm0-2.667h-8v1.333h8V4zm-8 6.667h5.334V9.333H1.333v1.334zm13-3l1 1-4.66 4.666-3.006-3 1-1 2.006 2 3.66-3.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="playlist-add-check_svg__b" fill="#fff">
        <use xlinkHref="#playlist-add-check_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#playlist-add-check_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlaylistAddCheck
