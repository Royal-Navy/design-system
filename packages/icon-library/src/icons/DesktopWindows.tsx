import React, { SVGProps } from 'react'

const SvgDesktopWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="desktop-windows_svg__a"
        d="M14 1.333H2c-.733 0-1.333.6-1.333 1.334v8C.667 11.4 1.267 12 2 12h4.667v1.333H5.333v1.334h5.334v-1.334H9.333V12H14c.733 0 1.333-.6 1.333-1.333v-8c0-.734-.6-1.334-1.333-1.334zm0 9.334H2v-8h12v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="desktop-windows_svg__b" fill="#fff">
        <use xlinkHref="#desktop-windows_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#desktop-windows_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDesktopWindows
