import React, { SVGProps } from 'react'

const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="send_svg__a"
        d="M1.34 14l13.993-6L1.34 2l-.007 4.667 10 1.333-10 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="send_svg__b" fill="#fff">
        <use xlinkHref="#send_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#send_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSend
