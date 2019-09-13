import React, { SVGProps } from 'react'

const SvgRssFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="rss-feed_svg__a"
        d="M4.12 13.333a1.453 1.453 0 110-2.906 1.453 1.453 0 010 2.906zM2.667 2.96c5.726 0 10.373 4.647 10.373 10.373h-1.887c0-4.686-3.8-8.486-8.486-8.486V2.96zm0 3.773c3.646 0 6.6 2.954 6.6 6.6H7.38c0-2.6-2.113-4.713-4.713-4.713V6.733z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="rss-feed_svg__b" fill="#fff">
        <use xlinkHref="#rss-feed_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#rss-feed_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRssFeed
