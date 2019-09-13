import React, { SVGProps } from 'react'

const SvgChatBubbleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="chat-bubble-outline_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.334.6-1.334 1.334v12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm0 9.334H4L2.667 12V2.667h10.666v8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chat-bubble-outline_svg__b" fill="#fff">
        <use xlinkHref="#chat-bubble-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#chat-bubble-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChatBubbleOutline
