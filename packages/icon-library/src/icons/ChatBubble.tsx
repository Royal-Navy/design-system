import React, { SVGProps } from 'react'

const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="chat-bubble_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.334.6-1.334 1.334v12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="chat-bubble_svg__b" fill="#fff">
        <use xlinkHref="#chat-bubble_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#chat-bubble_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgChatBubble
