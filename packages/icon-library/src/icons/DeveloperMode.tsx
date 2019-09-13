import React, { SVGProps } from 'react'

const SvgDeveloperMode = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="developer-mode_svg__a"
        d="M4.667 3.333h6.666v1.334h1.334V2c0-.733-.6-1.327-1.334-1.327L4.667.667c-.734 0-1.334.6-1.334 1.333v2.667h1.334V3.333zm5.606 7.727L13.333 8l-3.06-3.06-.94.947L11.447 8l-2.114 2.113.94.947zm-3.606-.947L4.553 8l2.114-2.113-.94-.947L2.667 8l3.06 3.06.94-.947zm4.666 2.554H4.667v-1.334H3.333V14c0 .733.6 1.333 1.334 1.333h6.666c.734 0 1.334-.6 1.334-1.333v-2.667h-1.334v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="developer-mode_svg__b" fill="#fff">
        <use xlinkHref="#developer-mode_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#developer-mode_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDeveloperMode
