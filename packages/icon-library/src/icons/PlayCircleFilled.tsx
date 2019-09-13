import React, { SVGProps } from 'react'

const SvgPlayCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="play-circle-filled_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zM6.667 11V5l4 3-4 3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="play-circle-filled_svg__b" fill="#fff">
        <use xlinkHref="#play-circle-filled_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#play-circle-filled_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPlayCircleFilled
