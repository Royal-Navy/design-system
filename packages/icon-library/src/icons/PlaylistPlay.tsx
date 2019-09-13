import React, { SVGProps } from 'react'

const SvgPlaylistPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="playlist-play_svg__a"
        d="M12.667 6H1.333v1.333h11.334V6zm0-2.667H1.333v1.334h11.334V3.333zM1.333 10H10V8.667H1.333V10zm10-1.333v4l3.334-2-3.334-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="playlist-play_svg__b" fill="#fff">
        <use xlinkHref="#playlist-play_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#playlist-play_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlaylistPlay
