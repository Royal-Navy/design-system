import React, { SVGProps } from 'react'

const SvgVoiceChat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="voice-chat_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-1.333 8L9.333 7.2v2.133H4V4h5.333v2.133L12 4v5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="voice-chat_svg__b" fill="#fff">
        <use xlinkHref="#voice-chat_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#voice-chat_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVoiceChat
