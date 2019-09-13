import React, { SVGProps } from 'react'

const SvgArrowDropUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="arrow-drop-up_svg__a" d="M8 5.333L4.444 8.889h7.112z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-drop-up_svg__b" fill="#fff">
        <use xlinkHref="#arrow-drop-up_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#arrow-drop-up_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgArrowDropUp
