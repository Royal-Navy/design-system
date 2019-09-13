import React, { SVGProps } from 'react'

const SvgFeedback = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="feedback_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-4.666 8H7.333V8h1.334v1.333zm0-2.666H7.333V4h1.334v2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="feedback_svg__b" fill="#fff">
        <use xlinkHref="#feedback_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#feedback_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFeedback
