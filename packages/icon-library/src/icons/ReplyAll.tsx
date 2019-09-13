import React, { SVGProps } from 'react'

const SvgReplyAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="reply-all_svg__a"
        d="M4.667 5.333v-2L0 8l4.667 4.667v-2L2 8l2.667-2.667zm4 .667V3.333L4 8l4.667 4.667V9.933C12 9.933 14.333 11 16 13.333 15.333 10 13.333 6.667 8.667 6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="reply-all_svg__b" fill="#fff">
        <use xlinkHref="#reply-all_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#reply-all_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReplyAll
