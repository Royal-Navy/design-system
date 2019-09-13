import React, { SVGProps } from 'react'

const SvgCallReceived = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="call-received_svg__a"
        d="M13.333 3.607l-.94-.94-7.726 7.726V6H3.333v6.667H10v-1.334H5.607z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="call-received_svg__b" fill="#fff">
        <use xlinkHref="#call-received_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#call-received_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCallReceived
