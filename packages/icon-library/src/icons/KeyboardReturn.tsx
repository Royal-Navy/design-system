import React, { SVGProps } from 'react'

const SvgKeyboardReturn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="keyboard-return_svg__a"
        d="M12.667 4.667v2.666h-8.78L6.273 4.94 5.333 4l-4 4 4 4 .94-.94-2.386-2.393H14v-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="keyboard-return_svg__b" fill="#fff">
        <use xlinkHref="#keyboard-return_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#keyboard-return_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgKeyboardReturn
