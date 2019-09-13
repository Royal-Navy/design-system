import React, { SVGProps } from 'react'

const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="mouse_svg__a"
        d="M8.667.713V6h4.666c0-2.72-2.033-4.96-4.666-5.287zm-6 9.287A5.332 5.332 0 008 15.333 5.332 5.332 0 0013.333 10V7.333H2.667V10zM7.333.713A5.326 5.326 0 002.667 6h4.666V.713z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mouse_svg__b" fill="#fff">
        <use xlinkHref="#mouse_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#mouse_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMouse
