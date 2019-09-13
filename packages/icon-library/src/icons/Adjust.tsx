import React, { SVGProps } from 'react'

const SvgAdjust = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="adjust_svg__a"
        d="M8 1.333C4.327 1.333 1.333 4.327 1.333 8c0 3.673 2.994 6.667 6.667 6.667 3.673 0 6.667-2.994 6.667-6.667 0-3.673-2.994-6.667-6.667-6.667zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333zM10 8c0 1.107-.893 2-2 2s-2-.893-2-2 .893-2 2-2 2 .893 2 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="adjust_svg__b" fill="#fff">
        <use xlinkHref="#adjust_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#adjust_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAdjust
