import React, { SVGProps } from 'react'

const SvgLocalLaundryService = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-laundry-service_svg__a"
        d="M6.113 11.22a2.672 2.672 0 003.774 0 2.672 2.672 0 000-3.773L6.113 11.22zM12 1.34l-8-.007c-.74 0-1.333.594-1.333 1.334v10.666c0 .74.593 1.334 1.333 1.334h8c.74 0 1.333-.594 1.333-1.334V2.667c0-.74-.593-1.327-1.333-1.327zM6.667 2.667c.366 0 .666.3.666.666 0 .367-.3.667-.666.667A.669.669 0 016 3.333c0-.366.3-.666.667-.666zm-2 0c.366 0 .666.3.666.666 0 .367-.3.667-.666.667A.669.669 0 014 3.333c0-.366.3-.666.667-.666zM8 13.333c-2.207 0-4-1.793-4-4 0-2.206 1.793-4 4-4s4 1.794 4 4c0 2.207-1.793 4-4 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-laundry-service_svg__b" fill="#fff">
        <use xlinkHref="#local-laundry-service_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-laundry-service_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalLaundryService
