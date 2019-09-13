import React, { SVGProps } from 'react'

const SvgArrowForward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="arrow-forward_svg__a"
        d="M8 2.667l-.942.942 3.724 3.724H2.667v1.334h8.115l-3.724 3.724.942.942L13.333 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-forward_svg__b" fill="#fff">
        <use xlinkHref="#arrow-forward_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-forward_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowForward
