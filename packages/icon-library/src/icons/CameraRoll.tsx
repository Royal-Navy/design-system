import React, { SVGProps } from 'react'

const SvgCameraRoll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="camera-roll_svg__a"
        d="M9.333 3.333C9.333 2.6 8.733 2 8 2h-.667v-.667c0-.366-.3-.666-.666-.666H4c-.367 0-.667.3-.667.666V2h-.666c-.734 0-1.334.6-1.334 1.333v10c0 .734.6 1.334 1.334 1.334H8c.733 0 1.333-.6 1.333-1.334h5.334v-10H9.333zM8 12H6.667v-1.333H8V12zm0-6H6.667V4.667H8V6zm2.667 6H9.333v-1.333h1.334V12zm0-6H9.333V4.667h1.334V6zm2.666 6H12v-1.333h1.333V12zm0-6H12V4.667h1.333V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera-roll_svg__b" fill="#fff">
        <use xlinkHref="#camera-roll_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#camera-roll_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCameraRoll
