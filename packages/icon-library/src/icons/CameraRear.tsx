import React, { SVGProps } from 'react'

const SvgCameraRear = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="camera-rear_svg__a"
        d="M6.667 13.333H3.333v1.334h3.334V16l2-2-2-2v1.333zm2.666 0v1.334h3.334v-1.334H9.333zm2-13.333H4.667c-.734 0-1.334.6-1.334 1.333v9.334c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V1.333C12.667.6 12.067 0 11.333 0zM8 4a1.333 1.333 0 01-.007-2.667c.734 0 1.334.6 1.334 1.334A1.327 1.327 0 018 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera-rear_svg__b" fill="#fff">
        <use xlinkHref="#camera-rear_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#camera-rear_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCameraRear
