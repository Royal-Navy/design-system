import React, { SVGProps } from 'react'

const SvgLooks3 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="looks-3_svg__a"
        d="M12.673 2H3.34c-.733 0-1.333.6-1.333 1.333v9.334c0 .733.6 1.333 1.333 1.333h9.333c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333zm-2.666 5c0 .553-.447 1-1 1 .553 0 1 .447 1 1v1c0 .74-.6 1.333-1.334 1.333H6.007V10h2.666V8.667H7.34V7.333h1.333V6H6.007V4.667h2.666c.734 0 1.334.593 1.334 1.333v1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="looks-3_svg__b" fill="#fff">
        <use xlinkHref="#looks-3_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#looks-3_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLooks3
