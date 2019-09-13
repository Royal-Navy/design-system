import React, { SVGProps } from 'react'

const SvgDirectionsBus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="directions-bus_svg__a"
        d="M2.667 10.667c0 .586.26 1.113.666 1.48v1.186c0 .367.3.667.667.667h.667c.366 0 .666-.3.666-.667v-.666h5.334v.666c0 .367.3.667.666.667H12c.367 0 .667-.3.667-.667v-1.186a1.99 1.99 0 00.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm6 0c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="directions-bus_svg__b" fill="#fff">
        <use xlinkHref="#directions-bus_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#directions-bus_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDirectionsBus
