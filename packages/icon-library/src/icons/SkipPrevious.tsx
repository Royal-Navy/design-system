import React, { SVGProps } from 'react'

const SvgSkipPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="skip-previous_svg__a"
        d="M4 4h1.333v8H4V4zm2.333 4L12 12V4L6.333 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="skip-previous_svg__b" fill="#fff">
        <use xlinkHref="#skip-previous_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#skip-previous_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSkipPrevious
