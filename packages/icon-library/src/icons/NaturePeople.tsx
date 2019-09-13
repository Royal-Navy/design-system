import React, { SVGProps } from 'react'

const SvgNaturePeople = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="nature-people_svg__a"
        d="M14.78 6.113a4.663 4.663 0 00-4.667-4.666 4.663 4.663 0 00-4.666 4.666 4.654 4.654 0 003.886 4.594v2.626H4v-2h.667V8.667C4.667 8.3 4.367 8 4 8H2c-.367 0-.667.3-.667.667v2.666H2v3.334h10.667v-1.334h-2v-2.586a4.667 4.667 0 004.113-4.634zM3 7.333c.553 0 1-.446 1-1 0-.553-.447-1-1-1-.553 0-1 .447-1 1 0 .554.447 1 1 1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="nature-people_svg__b" fill="#fff">
        <use xlinkHref="#nature-people_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#nature-people_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNaturePeople
