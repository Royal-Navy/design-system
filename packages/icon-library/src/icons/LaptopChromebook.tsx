import React, { SVGProps } from 'react'

const SvgLaptopChromebook = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="laptop-chromebook_svg__a"
        d="M14.667 12V2H1.333v10H0v1.333h16V12h-1.333zm-5.334 0H6.667v-.667h2.666V12zm4-2H2.667V3.333h10.666V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="laptop-chromebook_svg__b" fill="#fff">
        <use xlinkHref="#laptop-chromebook_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#laptop-chromebook_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLaptopChromebook
