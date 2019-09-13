import React, { SVGProps } from 'react'

const SvgLaptopWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="laptop-windows_svg__a"
        d="M13.333 12v-.667c.734 0 1.327-.6 1.327-1.333l.007-6.667c0-.733-.6-1.333-1.334-1.333H2.667c-.734 0-1.334.6-1.334 1.333V10c0 .733.6 1.333 1.334 1.333V12H0v1.333h16V12h-2.667zM2.667 3.333h10.666V10H2.667V3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="laptop-windows_svg__b" fill="#fff">
        <use xlinkHref="#laptop-windows_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#laptop-windows_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLaptopWindows
