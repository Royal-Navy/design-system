import React, { SVGProps } from 'react'

const SvgBrightnessAuto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="brightness-auto_svg__a"
        d="M7.233 8.433h1.534L8 6l-.767 2.433zm6.1-2.64V2.667h-3.126L8 .46 5.793 2.667H2.667v3.126L.46 8l2.207 2.207v3.126h3.126L8 15.54l2.207-2.207h3.126v-3.126L15.54 8l-2.207-2.207zm-3.8 4.874l-.466-1.334H6.933l-.466 1.334H5.2l2.133-6h1.334l2.133 6H9.533z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brightness-auto_svg__b" fill="#fff">
        <use xlinkHref="#brightness-auto_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brightness-auto_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrightnessAuto
