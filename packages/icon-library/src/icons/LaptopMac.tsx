import React, { SVGProps } from 'react'

const SvgLaptopMac = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="laptop-mac_svg__a"
        d="M13.333 12c.734 0 1.327-.6 1.327-1.333l.007-7.334c0-.733-.6-1.333-1.334-1.333H2.667c-.734 0-1.334.6-1.334 1.333v7.334c0 .733.6 1.333 1.334 1.333H0c0 .733.6 1.333 1.333 1.333h13.334c.733 0 1.333-.6 1.333-1.333h-2.667zM2.667 3.333h10.666v7.334H2.667V3.333zM8 12.667A.669.669 0 017.333 12c0-.367.3-.667.667-.667.367 0 .667.3.667.667 0 .367-.3.667-.667.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="laptop-mac_svg__b" fill="#fff">
        <use xlinkHref="#laptop-mac_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#laptop-mac_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLaptopMac
