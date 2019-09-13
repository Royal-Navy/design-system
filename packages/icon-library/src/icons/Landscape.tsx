import React, { SVGProps } from 'react'

const SvgLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="landscape_svg__a"
        d="M9.333 4l-2.5 3.333 1.9 2.534-1.066.8c-1.127-1.5-3-4-3-4L.667 12h14.666l-6-8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="landscape_svg__b" fill="#fff">
        <use xlinkHref="#landscape_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#landscape_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLandscape
