import React, { SVGProps } from 'react'

const SvgVolumeMute = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="volume-mute_svg__a"
        d="M4.444 6.222v3.556h2.667l3.556 3.555V2.667L7.111 6.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="volume-mute_svg__b" fill="#fff">
        <use xlinkHref="#volume-mute_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#volume-mute_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVolumeMute
