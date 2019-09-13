import React, { SVGProps } from 'react'

const SvgCameraEnhance = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="camera-enhance_svg__a"
        d="M6 2L4.78 3.333H2.667c-.734 0-1.334.6-1.334 1.334v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334H11.22L10 2H6zm2 10a3.335 3.335 0 010-6.667A3.335 3.335 0 018 12zm0-.667L8.833 9.5l1.834-.833-1.834-.834L8 6l-.833 1.833-1.834.834 1.834.833L8 11.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="camera-enhance_svg__b" fill="#fff">
        <use xlinkHref="#camera-enhance_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#camera-enhance_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCameraEnhance
