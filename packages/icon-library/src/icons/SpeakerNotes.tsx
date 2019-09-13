import React, { SVGProps } from 'react'

const SvgSpeakerNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="speaker-notes_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.327.6-1.327 1.334l-.007 12L4 12h9.333c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-8 8H4V8h1.333v1.333zm0-2H4V6h1.333v1.333zm0-2H4V4h1.333v1.333zm4.667 4H6.667V8H10v1.333zm2-2H6.667V6H12v1.333zm0-2H6.667V4H12v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="speaker-notes_svg__b" fill="#fff">
        <use xlinkHref="#speaker-notes_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#speaker-notes_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpeakerNotes
