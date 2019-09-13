import React, { SVGProps } from 'react'

const SvgPlayCircleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="play-circle-outline_svg__a"
        d="M6.667 11l4-3-4-3v6zM8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="play-circle-outline_svg__b" fill="#fff">
        <use xlinkHref="#play-circle-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#play-circle-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlayCircleOutline
