import React, { SVGProps } from 'react'

const SvgSwapCalls = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="swap-calls_svg__a"
        d="M12 2.667L9.333 5.333h2V10c0 .733-.6 1.333-1.333 1.333s-1.333-.6-1.333-1.333V5.333a2.666 2.666 0 10-5.334 0V10h-2L4 12.667 6.667 10h-2V5.333C4.667 4.6 5.267 4 6 4s1.333.6 1.333 1.333V10a2.666 2.666 0 105.334 0V5.333h2L12 2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="swap-calls_svg__b" fill="#fff">
        <use xlinkHref="#swap-calls_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#swap-calls_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSwapCalls
