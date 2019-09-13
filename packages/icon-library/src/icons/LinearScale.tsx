import React, { SVGProps } from 'react'

const SvgLinearScale = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="linear-scale_svg__a"
        d="M13 6.333c-.687 0-1.267.414-1.527 1H9.527c-.26-.586-.84-1-1.527-1-.687 0-1.267.414-1.527 1H4.527c-.26-.586-.84-1-1.527-1a1.667 1.667 0 000 3.334c.687 0 1.267-.414 1.527-1h1.946c.26.586.84 1 1.527 1 .687 0 1.267-.414 1.527-1h1.946c.26.586.84 1 1.527 1a1.667 1.667 0 000-3.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="linear-scale_svg__b" fill="#fff">
        <use xlinkHref="#linear-scale_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#linear-scale_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLinearScale
