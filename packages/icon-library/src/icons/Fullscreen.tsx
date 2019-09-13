import React, { SVGProps } from 'react'

const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fullscreen_svg__a"
        d="M4 9.778H2.667v3.555h3.555V12H4V9.778zM2.667 6.222H4V4h2.222V2.667H2.667v3.555zM12 12H9.778v1.333h3.555V9.778H12V12zM9.778 2.667V4H12v2.222h1.333V2.667H9.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fullscreen_svg__b" fill="#fff">
        <use xlinkHref="#fullscreen_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fullscreen_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFullscreen
