import React, { SVGProps } from 'react'

const SvgPersonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="person-outline_svg__a"
        d="M8 8.889c-2.071 0-6.222 1.04-6.222 3.111v2.222h12.444V12c0-2.071-4.15-3.111-6.222-3.111zm4.702 3.813H3.298V12C3.387 11.564 5.6 10.409 8 10.409s4.613 1.155 4.702 1.591v.702zM8 8a3.549 3.549 0 003.556-3.556A3.549 3.549 0 008 .89a3.547 3.547 0 00-3.547 3.555A3.547 3.547 0 008 8zm0-5.591c1.12 0 2.027.915 2.027 2.035S9.12 6.48 8 6.48a2.04 2.04 0 01-2.027-2.036A2.04 2.04 0 018 2.41z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="person-outline_svg__b" fill="#fff">
        <use xlinkHref="#person-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#person-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPersonOutline
