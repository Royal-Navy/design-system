import React, { SVGProps } from 'react'

const SvgLoyalty = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="loyalty_svg__a"
        d="M14.273 7.72l-6-6a1.325 1.325 0 00-.94-.387H2.667c-.734 0-1.334.6-1.334 1.334v4.666c0 .367.147.7.394.947l6 6c.24.24.573.387.94.387.366 0 .7-.147.94-.394l4.666-4.666c.247-.24.394-.574.394-.94 0-.367-.154-.707-.394-.947zM3.667 4.667c-.554 0-1-.447-1-1 0-.554.446-1 1-1 .553 0 1 .446 1 1 0 .553-.447 1-1 1zm7.846 5.513l-2.846 2.847L5.82 10.18A1.667 1.667 0 017 7.333c.46 0 .88.187 1.18.494l.487.48.486-.487a1.668 1.668 0 012.36 2.36z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="loyalty_svg__b" fill="#fff">
        <use xlinkHref="#loyalty_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#loyalty_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLoyalty
