import React, { SVGProps } from 'react'

const SvgPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="portrait_svg__a"
        d="M8 8.167c.827 0 1.5-.674 1.5-1.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .826.673 1.5 1.5 1.5zm3 2.666c0-1-2-1.5-3-1.5s-3 .5-3 1.5v.5h6v-.5zM12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H3.333V3.333h9.334v9.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="portrait_svg__b" fill="#fff">
        <use xlinkHref="#portrait_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#portrait_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPortrait
