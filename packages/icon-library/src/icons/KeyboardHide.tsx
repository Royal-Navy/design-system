import React, { SVGProps } from 'react'

const SvgKeyboardHide = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-hide_svg__a"
        d="M13.333 2H2.667c-.734 0-1.327.6-1.327 1.333L1.333 10c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333zm-6 2h1.334v1.333H7.333V4zm0 2h1.334v1.333H7.333V6zm-2-2h1.334v1.333H5.333V4zm0 2h1.334v1.333H5.333V6zm-.666 1.333H3.333V6h1.334v1.333zm0-2H3.333V4h1.334v1.333zm6 4.667H5.333V8.667h5.334V10zm0-2.667H9.333V6h1.334v1.333zm0-2H9.333V4h1.334v1.333zm2 2h-1.334V6h1.334v1.333zm0-2h-1.334V4h1.334v1.333zM8 15.333l2.667-2.666H5.333L8 15.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-hide_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-hide_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-hide_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardHide
