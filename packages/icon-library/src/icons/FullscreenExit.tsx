import React, { SVGProps } from 'react'

const SvgFullscreenExit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fullscreen-exit_svg__a"
        d="M2.667 11.111h2.222v2.222h1.333V9.778H2.667v1.333zM4.889 4.89H2.667v1.333h3.555V2.667H4.89v2.222zm4.889 8.444h1.333v-2.222h2.222V9.778H9.778v3.555zM11.11 4.89V2.667H9.778v3.555h3.555V4.89h-2.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fullscreen-exit_svg__b" fill="#fff">
        <use xlinkHref="#fullscreen-exit_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fullscreen-exit_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFullscreenExit
