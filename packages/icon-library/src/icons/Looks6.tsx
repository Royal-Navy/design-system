import React, { SVGProps } from 'react'

const SvgLooks6 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="looks-6_svg__a"
        d="M7.333 10h1.334V8.667H7.333V10zm5.334-8H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM10 6H7.333v1.333h1.334C9.4 7.333 10 7.927 10 8.667V10c0 .74-.6 1.333-1.333 1.333H7.333A1.333 1.333 0 016 10V6c0-.74.6-1.333 1.333-1.333H10V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="looks-6_svg__b" fill="#fff">
        <use xlinkHref="#looks-6_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#looks-6_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLooks6
