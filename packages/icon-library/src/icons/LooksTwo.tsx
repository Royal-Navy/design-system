import React, { SVGProps } from 'react'

const SvgLooksTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="looks-two_svg__a"
        d="M12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM10 7.333c0 .74-.6 1.334-1.333 1.334H7.333V10H10v1.333H6V8.667c0-.74.6-1.334 1.333-1.334h1.334V6H6V4.667h2.667C9.4 4.667 10 5.26 10 6v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="looks-two_svg__b" fill="#fff">
        <use xlinkHref="#looks-two_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#looks-two_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLooksTwo
