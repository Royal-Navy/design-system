import React, { SVGProps } from 'react'

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="reply_svg__a"
        d="M6.667 6V3.333L2 8l4.667 4.667V9.933C10 9.933 12.333 11 14 13.333 13.333 10 11.333 6.667 6.667 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="reply_svg__b" fill="#fff">
        <use xlinkHref="#reply_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#reply_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReply
