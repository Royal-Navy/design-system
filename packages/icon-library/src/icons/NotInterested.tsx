import React, { SVGProps } from 'react'

const SvgNotInterested = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="not-interested_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 12A5.332 5.332 0 012.667 8c0-1.233.42-2.367 1.126-3.267l7.474 7.474A5.268 5.268 0 018 13.333zm4.207-2.066L4.733 3.793A5.268 5.268 0 018 2.667 5.332 5.332 0 0113.333 8c0 1.233-.42 2.367-1.126 3.267z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="not-interested_svg__b" fill="#fff">
        <use xlinkHref="#not-interested_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#not-interested_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNotInterested
