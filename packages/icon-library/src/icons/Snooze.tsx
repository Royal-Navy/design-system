import React, { SVGProps } from 'react'

const SvgSnooze = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="snooze_svg__a"
        d="M5.253 2.26L4.4 1.24 1.333 3.807l.86 1.02 3.06-2.567zm9.414 1.553L11.6 1.24l-.86 1.02 3.067 2.573.86-1.02zM8 2.667a6 6 0 10.001 12 6 6 0 00-.001-12zm0 10.666a4.663 4.663 0 01-4.667-4.666A4.663 4.663 0 018 4a4.663 4.663 0 014.667 4.667A4.663 4.663 0 018 13.333zm-2-6h2.42L6 10.133v1.2h4V10H7.58L10 7.2V6H6v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="snooze_svg__b" fill="#fff">
        <use xlinkHref="#snooze_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#snooze_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSnooze
