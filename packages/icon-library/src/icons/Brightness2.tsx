import React, { SVGProps } from 'react'

const SvgBrightness2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="brightness-2_svg__a"
        d="M6.667 1.333a6.649 6.649 0 00-3.334.9A6.651 6.651 0 016.667 8a6.651 6.651 0 01-3.334 5.767c.98.566 2.12.9 3.334.9A6.67 6.67 0 0013.333 8a6.67 6.67 0 00-6.666-6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brightness-2_svg__b" fill="#fff">
        <use xlinkHref="#brightness-2_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brightness-2_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrightness2
