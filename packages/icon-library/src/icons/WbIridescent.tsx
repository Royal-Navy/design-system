import React, { SVGProps } from 'react'

const SvgWbIridescent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wb-iridescent_svg__a"
        d="M3.333 9.667h9.334v-4H3.333v4zm4-9.3v1.966h1.334V.367H7.333zm5.36 1.666L11.5 3.227l.94.94 1.2-1.194-.947-.94zM8.667 14.967V13H7.333v1.967h1.334zm4.966-2.607l-1.2-1.193-.94.94 1.194 1.2.946-.947zM2.367 2.973L3.56 4.167l.94-.94-1.193-1.194-.94.94zm.94 10.327L4.5 12.1l-.94-.94-1.193 1.193.94.947z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wb-iridescent_svg__b" fill="#fff">
        <use xlinkHref="#wb-iridescent_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wb-iridescent_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWbIridescent
