import React, { SVGProps } from 'react'

const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="arrow-back_svg__a"
        d="M13.333 7.333H5.218l3.724-3.724L8 2.667 2.667 8 8 13.333l.942-.942-3.724-3.724h8.115z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-back_svg__b" fill="#fff">
        <use xlinkHref="#arrow-back_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-back_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowBack
