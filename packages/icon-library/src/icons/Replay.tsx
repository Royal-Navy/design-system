import React, { SVGProps } from 'react'

const SvgReplay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="replay_svg__a"
        d="M8 3.333V.667L4.667 4 8 7.333V4.667c2.207 0 4 1.793 4 4 0 2.206-1.793 4-4 4s-4-1.794-4-4H2.667A5.332 5.332 0 008 14a5.332 5.332 0 005.333-5.333A5.332 5.332 0 008 3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="replay_svg__b" fill="#fff">
        <use xlinkHref="#replay_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#replay_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReplay
