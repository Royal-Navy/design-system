import React, { SVGProps } from 'react'

const SvgLocalPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-play_svg__a"
        d="M13.333 8c0-.733.6-1.333 1.334-1.333V4c0-.733-.6-1.333-1.334-1.333H2.667c-.734 0-1.327.6-1.327 1.333v2.667a1.333 1.333 0 01-.007 2.667V12c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V9.333c-.734 0-1.334-.6-1.334-1.333zm-2.946 3.2L8 9.667 5.613 11.2l.72-2.747L4.14 6.66l2.827-.167L8 3.867 9.027 6.5l2.826.167L9.66 8.46l.727 2.74z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-play_svg__b" fill="#fff">
        <use xlinkHref="#local-play_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-play_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalPlay
