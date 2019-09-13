import React, { SVGProps } from 'react'

const SvgFlashAuto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="flash-auto_svg__a"
        d="M2 1.333v8h2v6l4.667-8H6l2.667-6H2zm10.667 0h-1.334l-2.133 6h1.267L10.933 6h2.134l.466 1.333H14.8l-2.133-6zM11.233 5.1L12 2.667l.767 2.433h-1.534z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="flash-auto_svg__b" fill="#fff">
        <use xlinkHref="#flash-auto_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#flash-auto_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFlashAuto
