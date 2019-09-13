import React, { SVGProps } from 'react'

const SvgCameraAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="camera-alt_svg__a"
        d="M8 10.133a2.133 2.133 0 110-4.266 2.133 2.133 0 010 4.266zm-2-8.8h4l1.22 1.334h2.113c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4c0-.733.6-1.333 1.334-1.333H4.78L6 1.333zm2 10a3.335 3.335 0 000-6.666 3.335 3.335 0 000 6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera-alt_svg__b" fill="#fff">
        <use xlinkHref="#camera-alt_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#camera-alt_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCameraAlt
