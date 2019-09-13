import React, { SVGProps } from 'react'

const SvgWatchLater = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="watch-later_svg__a"
        d="M8 1.333c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.667-6.667-6.667zm2.8 9.467L7.333 8.667v-4h1v3.466l3 1.8-.533.867z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="watch-later_svg__b" fill="#fff">
        <use xlinkHref="#watch-later_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#watch-later_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWatchLater
