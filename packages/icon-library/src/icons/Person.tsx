import React, { SVGProps } from 'react'

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="person_svg__a"
        d="M8 7.111a2.656 2.656 0 002.658-2.667A2.656 2.656 0 008 1.778a2.663 2.663 0 00-2.667 2.666A2.663 2.663 0 008 7.111zM8 8.89c-2.071 0-6.222 1.04-6.222 3.111v2.222h12.444V12c0-2.071-4.15-3.111-6.222-3.111z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="person_svg__b" fill="#fff">
        <use xlinkHref="#person_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#person_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPerson
