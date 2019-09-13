import React, { SVGProps } from 'react'

const SvgRecentActors = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="recent-actors_svg__a"
        d="M14 3.333v9.334h1.333V3.333H14zm-2.667 9.334h1.334V3.333h-1.334v9.334zm-2-9.334h-8c-.366 0-.666.3-.666.667v8c0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667V4c0-.367-.3-.667-.667-.667zm-4 1.834c.827 0 1.5.673 1.5 1.5 0 .826-.673 1.5-1.5 1.5-.826 0-1.5-.674-1.5-1.5 0-.827.674-1.5 1.5-1.5zm3 6.166h-6v-.5c0-1 2-1.5 3-1.5s3 .5 3 1.5v.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="recent-actors_svg__b" fill="#fff">
        <use xlinkHref="#recent-actors_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#recent-actors_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRecentActors
