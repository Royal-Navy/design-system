import React, { SVGProps } from 'react'

const SvgKeyboardCapslock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-capslock_svg__a"
        d="M8 5.607l3.06 3.06.94-.94-4-4-4 4 .94.94L8 5.607zM4 12h8v-1.333H4V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-capslock_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-capslock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-capslock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardCapslock
