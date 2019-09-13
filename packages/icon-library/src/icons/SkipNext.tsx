import React, { SVGProps } from 'react'

const SvgSkipNext = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="skip-next_svg__a"
        d="M4 12l5.667-4L4 4v8zm6.667-8v8H12V4h-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="skip-next_svg__b" fill="#fff">
        <use xlinkHref="#skip-next_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#skip-next_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSkipNext
