import React, { SVGProps } from 'react'

const SvgSlowMotionVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="slow-motion-video_svg__a"
        d="M8.7 6.527L6.667 5v6L8.7 9.473 10.667 8 8.7 6.527zm0 0L6.667 5v6L8.7 9.473 10.667 8 8.7 6.527zm0 0L6.667 5v6L8.7 9.473 10.667 8 8.7 6.527zM7.333 2.713V1.367A6.633 6.633 0 003.787 2.84l.946.953a5.294 5.294 0 012.6-1.08zm-3.54 2.02l-.953-.946a6.633 6.633 0 00-1.473 3.546h1.346c.12-.973.507-1.86 1.08-2.6zm-1.08 3.934H1.367a6.633 6.633 0 001.473 3.546l.953-.953a5.245 5.245 0 01-1.08-2.593zm1.074 4.493a6.654 6.654 0 003.546 1.473v-1.346a5.294 5.294 0 01-2.6-1.08l-.946.953zM14.667 8c0 3.44-2.614 6.28-5.967 6.633v-1.346A5.344 5.344 0 0013.333 8c0-2.7-2.02-4.94-4.633-5.287V1.367A6.677 6.677 0 0114.667 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="slow-motion-video_svg__b" fill="#fff">
        <use xlinkHref="#slow-motion-video_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#slow-motion-video_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSlowMotionVideo
