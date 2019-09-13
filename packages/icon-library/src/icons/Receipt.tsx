import React, { SVGProps } from 'react'

const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="receipt_svg__a"
        d="M12 11.333H4V10h8v1.333zm0-2.666H4V7.333h8v1.334zM12 6H4V4.667h8V6zM2 14.667l1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1V1.333l-1 1-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1-1-1v13.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="receipt_svg__b" fill="#fff">
        <use xlinkHref="#receipt_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#receipt_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReceipt
