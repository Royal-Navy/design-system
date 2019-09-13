import React, { SVGProps } from 'react'

const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="speaker_svg__a"
        d="M11.333 1.333H4.667c-.734 0-1.334.6-1.334 1.334v10.666c0 .734.6 1.327 1.334 1.327l6.666.007c.734 0 1.334-.6 1.334-1.334V2.667c0-.734-.6-1.334-1.334-1.334zM8 2.667c.733 0 1.333.6 1.333 1.333S8.733 5.333 8 5.333a1.333 1.333 0 110-2.666zm0 10.666a3.335 3.335 0 010-6.666 3.335 3.335 0 010 6.666zM8 8c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="speaker_svg__b" fill="#fff">
        <use xlinkHref="#speaker_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#speaker_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpeaker
