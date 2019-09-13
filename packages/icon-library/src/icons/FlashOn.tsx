import React, { SVGProps } from 'react'

const SvgFlashOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flash-on_svg__a"
        d="M4.667 1.333v7.334h2v6l4.666-8H8.667l2.666-5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flash-on_svg__b" fill="#fff">
        <use xlinkHref="#flash-on_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flash-on_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlashOn
