import React, { SVGProps } from 'react'

const SvgPowerInput = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="power-input_svg__a"
        d="M1.333 6v1.333H14V6H1.333zm0 4h3.334V8.667H1.333V10zM6 10h3.333V8.667H6V10zm4.667 0H14V8.667h-3.333V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="power-input_svg__b" fill="#fff">
        <use xlinkHref="#power-input_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#power-input_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPowerInput
