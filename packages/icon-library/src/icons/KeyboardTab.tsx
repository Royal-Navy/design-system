import React, { SVGProps } from 'react'

const SvgKeyboardTab = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-tab_svg__a"
        d="M7.727 4.94l2.386 2.393H.667v1.334h9.446L7.72 11.06l.947.94 4-4-4-4-.94.94zM13.333 4v8h1.334V4h-1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-tab_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-tab_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-tab_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardTab
