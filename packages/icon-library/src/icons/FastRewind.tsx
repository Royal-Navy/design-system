import React, { SVGProps } from 'react'

const SvgFastRewind = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="fast-rewind_svg__a"
        d="M7.333 12V4L1.667 8l5.666 4zm.334-4l5.666 4V4L7.667 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="fast-rewind_svg__b" fill="#fff">
        <use xlinkHref="#fast-rewind_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#fast-rewind_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFastRewind
