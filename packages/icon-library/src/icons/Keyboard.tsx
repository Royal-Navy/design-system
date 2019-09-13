import React, { SVGProps } from 'react'

const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard_svg__a"
        d="M13.333 3.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 6.666c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V4.667c0-.734-.6-1.334-1.334-1.334zm-6 2h1.334v1.334H7.333V5.333zm0 2h1.334v1.334H7.333V7.333zm-2-2h1.334v1.334H5.333V5.333zm0 2h1.334v1.334H5.333V7.333zm-.666 1.334H3.333V7.333h1.334v1.334zm0-2H3.333V5.333h1.334v1.334zm6 4.666H5.333V10h5.334v1.333zm0-2.666H9.333V7.333h1.334v1.334zm0-2H9.333V5.333h1.334v1.334zm2 2h-1.334V7.333h1.334v1.334zm0-2h-1.334V5.333h1.334v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard_svg__b" fill="#fff">
        <use xlinkHref="#keyboard_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboard
