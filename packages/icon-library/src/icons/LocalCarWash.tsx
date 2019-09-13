import React, { SVGProps } from 'react'

const SvgLocalCarWash = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-car-wash_svg__a"
        d="M11.333 3.333c.554 0 1-.446 1-1 0-.666-1-1.8-1-1.8s-1 1.134-1 1.8c0 .554.447 1 1 1zM8 3.333c.553 0 1-.446 1-1 0-.666-1-1.8-1-1.8s-1 1.134-1 1.8c0 .554.447 1 1 1zm-3.333 0c.553 0 1-.446 1-1 0-.666-1-1.8-1-1.8s-1 1.134-1 1.8c0 .554.446 1 1 1zm7.946 2.007a.996.996 0 00-.946-.673H4.333c-.44 0-.806.28-.946.673L2 9.333v5.334c0 .366.3.666.667.666h.666c.367 0 .667-.3.667-.666V14h8v.667c0 .366.3.666.667.666h.666c.367 0 .667-.3.667-.666V9.333L12.613 5.34zM4.333 12c-.553 0-1-.447-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .553-.446 1-1 1zm7.334 0c-.554 0-1-.447-1-1 0-.553.446-1 1-1 .553 0 1 .447 1 1 0 .553-.447 1-1 1zM3.333 8.667l1-3h7.334l1 3H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-car-wash_svg__b" fill="#fff">
        <use xlinkHref="#local-car-wash_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-car-wash_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalCarWash
