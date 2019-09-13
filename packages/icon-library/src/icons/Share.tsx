import React, { SVGProps } from 'react'

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="share_svg__a"
        d="M12 10.72c-.507 0-.96.2-1.307.513L5.94 8.467C5.973 8.313 6 8.16 6 8c0-.16-.027-.313-.06-.467l4.7-2.74A1.997 1.997 0 0014 3.333c0-1.106-.893-2-2-2s-2 .894-2 2c0 .16.027.314.06.467l-4.7 2.74A1.997 1.997 0 002 8a1.997 1.997 0 003.36 1.46l4.747 2.773a1.88 1.88 0 00-.054.434c0 1.073.874 1.946 1.947 1.946a1.949 1.949 0 001.947-1.946A1.949 1.949 0 0012 10.72z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="share_svg__b" fill="#fff">
        <use xlinkHref="#share_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#share_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgShare
