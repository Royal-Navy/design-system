import React, { SVGProps } from 'react'

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pause_svg__a"
        d="M4 12.667h2.667V3.333H4v9.334zm5.333-9.334v9.334H12V3.333H9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pause_svg__b" fill="#fff">
        <use xlinkHref="#pause_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pause_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPause
