import React, { SVGProps } from 'react'

const SvgKeyboardBackspace = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-backspace_svg__a"
        d="M14 7.333H4.553L6.94 4.94 6 4 2 8l4 4 .94-.94-2.387-2.393H14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-backspace_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-backspace_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-backspace_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardBackspace
