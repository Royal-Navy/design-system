import React, { SVGProps } from 'react'

const SvgPhonelinkErase = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="phonelink-erase_svg__a"
        d="M8.667 5.467L8 4.8 5.333 7.467 2.667 4.8 2 5.467l2.667 2.666L2 10.8l.667.667L5.333 8.8 8 11.467l.667-.667L6 8.133l2.667-2.666zm4-4.8H6c-.733 0-1.333.6-1.333 1.333v2H6V2.667h6.667v10.666H6V12H4.667v2c0 .733.6 1.333 1.333 1.333h6.667c.733 0 1.333-.6 1.333-1.333V2c0-.733-.6-1.333-1.333-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="phonelink-erase_svg__b" fill="#fff">
        <use xlinkHref="#phonelink-erase_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#phonelink-erase_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhonelinkErase
