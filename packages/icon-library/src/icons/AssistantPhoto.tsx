import React, { SVGProps } from 'react'

const SvgAssistantPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="assistant-photo_svg__a"
        d="M9.6 4l-.267-1.333h-6V14h1.334V9.333H8.4l.267 1.334h4.666V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="assistant-photo_svg__b" fill="#fff">
        <use xlinkHref="#assistant-photo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#assistant-photo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAssistantPhoto
