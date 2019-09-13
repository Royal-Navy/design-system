import React, { SVGProps } from 'react'

const SvgAudiotrack = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="audiotrack_svg__a"
        d="M8 2v6.187A2.927 2.927 0 007 8c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 002.967-2.667H10V4h2.667V2H8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="audiotrack_svg__b" fill="#fff">
        <use xlinkHref="#audiotrack_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#audiotrack_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAudiotrack
