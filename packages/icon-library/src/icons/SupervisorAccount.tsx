import React, { SVGProps } from 'react'

const SvgSupervisorAccount = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="supervisor-account_svg__a"
        d="M11 8c.92 0 1.66-.747 1.66-1.667S11.92 4.667 11 4.667A1.667 1.667 0 0011 8zm-5-.667a1.992 1.992 0 001.993-2 1.997 1.997 0 10-3.993 0c0 1.107.893 2 2 2zm5 2c-1.22 0-3.667.614-3.667 1.834v1.5h7.334v-1.5c0-1.22-2.447-1.834-3.667-1.834zm-5-.666c-1.553 0-4.667.78-4.667 2.333v1.667H6v-1.5c0-.567.22-1.56 1.58-2.314A8.189 8.189 0 006 8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="supervisor-account_svg__b" fill="#fff">
        <use xlinkHref="#supervisor-account_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#supervisor-account_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSupervisorAccount
