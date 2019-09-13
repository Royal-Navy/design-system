import React, { SVGProps } from 'react'

const SvgCancel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="cancel_svg__a"
        d="M8 .889A7.11 7.11 0 00.889 8 7.11 7.11 0 008 15.111 7.11 7.11 0 0015.111 8 7.11 7.11 0 008 .889zm3.556 9.662l-1.005 1.005L8 9.004l-2.551 2.552-1.005-1.005L6.996 8 4.444 5.449 5.45 4.444 8 6.996l2.551-2.552 1.005 1.005L9.004 8l2.552 2.551z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="cancel_svg__b" fill="#fff">
        <use xlinkHref="#cancel_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#cancel_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCancel
