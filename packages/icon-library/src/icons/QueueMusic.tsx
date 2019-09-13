import React, { SVGProps } from 'react'

const SvgQueueMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="queue-music_svg__a"
        d="M10 4H2v1.333h8V4zm0 2.667H2V8h8V6.667zm-8 4h5.333V9.333H2v1.334zM11.333 4v5.453a2.003 2.003 0 00-.666-.12c-1.107 0-2 .894-2 2 0 1.107.893 2 2 2 1.106 0 2-.893 2-2v-6h2V4h-3.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="queue-music_svg__b" fill="#fff">
        <use xlinkHref="#queue-music_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#queue-music_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgQueueMusic
