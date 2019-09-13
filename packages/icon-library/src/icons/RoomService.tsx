import React, { SVGProps } from 'react'

const SvgRoomService = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="room-service_svg__a"
        d="M1.333 11.333h13.334v1.334H1.333v-1.334zm7.894-6.14A1.337 1.337 0 008 3.333a1.337 1.337 0 00-1.227 1.86A6.008 6.008 0 002 10.667h12a6.008 6.008 0 00-4.773-5.474z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="room-service_svg__b" fill="#fff">
        <use xlinkHref="#room-service_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#room-service_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRoomService
