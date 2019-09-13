import React, { SVGProps } from 'react'

const SvgCameraFront = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="camera-front_svg__a"
        d="M6.667 13.333H3.333v1.334h3.334V16l2-2-2-2v1.333zm2.666 0v1.334h3.334v-1.334H9.333zM8 5.333c.733 0 1.333-.6 1.333-1.333S8.733 2.667 8 2.667 6.673 3.267 6.673 4 7.267 5.333 8 5.333zM11.333 0H4.667c-.734 0-1.334.6-1.334 1.333v9.334c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333V1.333C12.667.6 12.067 0 11.333 0zM4.667 1.333h6.666v7c0-1.113-2.22-1.666-3.333-1.666s-3.333.553-3.333 1.666v-7z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera-front_svg__b" fill="#fff">
        <use xlinkHref="#camera-front_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#camera-front_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCameraFront
