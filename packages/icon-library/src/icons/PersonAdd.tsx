import React, { SVGProps } from 'react'

const SvgPersonAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="person-add_svg__a"
        d="M8.889 7.111a2.656 2.656 0 002.658-2.667 2.656 2.656 0 00-2.658-2.666 2.663 2.663 0 00-2.667 2.666A2.663 2.663 0 008.89 7.111zM3.556 8.89V7.11h1.777V5.333H3.556V3.556H1.778v1.777H0v1.778h1.778V8.89h1.778zm5.333 0c-2.071 0-6.222 1.04-6.222 3.111v2.222H15.11V12c0-2.071-4.151-3.111-6.222-3.111z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="person-add_svg__b" fill="#fff">
        <use xlinkHref="#person-add_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#person-add_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPersonAdd
