import React, { SVGProps } from 'react'

const SvgNewReleases = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="new-releases_svg__a"
        d="M15.333 8l-1.626-1.853.226-2.454-2.406-.546-1.26-2.12L8 2l-2.267-.973-1.26 2.12-2.406.54.226 2.453L.667 8l1.626 1.853-.226 2.46 2.406.547 1.26 2.12L8 14l2.267.973 1.26-2.12 2.406-.546-.226-2.454L15.333 8zm-6.666 3.333H7.333V10h1.334v1.333zm0-2.666H7.333v-4h1.334v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="new-releases_svg__b" fill="#fff">
        <use xlinkHref="#new-releases_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#new-releases_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNewReleases
