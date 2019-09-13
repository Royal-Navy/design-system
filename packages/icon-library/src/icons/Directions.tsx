import React, { SVGProps } from 'react'

const SvgDirections = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions_svg__a"
        d="M14.473 7.527l-6-6a.664.664 0 00-.94 0l-6 6c-.26.26-.26.68 0 .94l6 6c.26.26.68.26.94 0l6-6a.664.664 0 000-.94zm-5.14 2.14V8H6.667v2H5.333V7.333c0-.366.3-.666.667-.666h3.333V5l2.334 2.333-2.334 2.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions_svg__b" fill="#fff">
        <use xlinkHref="#directions_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirections
