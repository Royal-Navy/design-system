import React, { SVGProps } from 'react'

const SvgWbIncandescent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wb-incandescent_svg__a"
        d="M2.367 12.36l.94.94L4.5 12.1l-.94-.94-1.193 1.2zm4.966 2.607h1.334V13H7.333v1.967zM2.667 7h-2v1.333h2V7zM10 4.207V1H6v3.207c-1.193.693-2 1.98-2 3.46 0 2.206 1.793 4 4 4s4-1.794 4-4c0-1.48-.807-2.767-2-3.46zM13.333 7v1.333h2V7h-2zm-1.84 5.107l1.194 1.2.94-.94-1.2-1.194-.934.934z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wb-incandescent_svg__b" fill="#fff">
        <use xlinkHref="#wb-incandescent_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wb-incandescent_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWbIncandescent
