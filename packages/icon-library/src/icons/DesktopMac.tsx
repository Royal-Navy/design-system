import React, { SVGProps } from 'react'

const SvgDesktopMac = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="desktop-mac_svg__a"
        d="M14 1.333H2c-.733 0-1.333.6-1.333 1.334v8C.667 11.4 1.267 12 2 12h4.667l-1.334 2v.667h5.334V14l-1.334-2H14c.733 0 1.333-.6 1.333-1.333v-8c0-.734-.6-1.334-1.333-1.334zm0 8H2V2.667h12v6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="desktop-mac_svg__b" fill="#fff">
        <use xlinkHref="#desktop-mac_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#desktop-mac_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDesktopMac
