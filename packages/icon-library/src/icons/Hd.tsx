import React, { SVGProps } from 'react'

const SvgHd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hd_svg__a"
        d="M12.667 2H3.333C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm-5.334 8h-1V8.667H5V10H4V6h1v1.667h1.333V6h1v4zm1.334-4h2.666c.367 0 .667.3.667.667v2.666c0 .367-.3.667-.667.667H8.667V6zm1 3H11V7H9.667v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hd_svg__b" fill="#fff">
        <use xlinkHref="#hd_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hd_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHd
