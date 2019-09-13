import React, { SVGProps } from 'react'

const SvgSpeakerGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="speaker-group_svg__a"
        d="M12.133.667c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2l-5.6-.007c-.66 0-1.2-.533-1.2-1.193v-9.6c0-.66.54-1.2 1.2-1.2h5.6zM9.333 2a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zm0 9a2.666 2.666 0 100-5.333 2.666 2.666 0 100 5.333zm0-1a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333zM4 3.333V14h6.667v1.333H4c-.74 0-1.333-.6-1.333-1.333V3.333H4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="speaker-group_svg__b" fill="#fff">
        <use xlinkHref="#speaker-group_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#speaker-group_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpeakerGroup
