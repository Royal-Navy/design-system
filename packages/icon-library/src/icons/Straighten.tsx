import React, { SVGProps } from 'react'

const SvgStraighten = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="straighten_svg__a"
        d="M14 4H2C1.267 4 .667 4.6.667 5.333v5.334C.667 11.4 1.267 12 2 12h12c.733 0 1.333-.6 1.333-1.333V5.333C15.333 4.6 14.733 4 14 4zm0 6.667H2V5.333h1.333V8h1.334V5.333H6V8h1.333V5.333h1.334V8H10V5.333h1.333V8h1.334V5.333H14v5.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="straighten_svg__b" fill="#fff">
        <use xlinkHref="#straighten_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#straighten_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgStraighten
