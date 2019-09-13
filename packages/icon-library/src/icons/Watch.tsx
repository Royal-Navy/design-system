import React, { SVGProps } from 'react'

const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="watch_svg__a"
        d="M13.333 8a5.317 5.317 0 00-2.026-4.18L10.667 0H5.333L4.7 3.82A5.293 5.293 0 002.667 8c0 1.7.793 3.207 2.033 4.18L5.333 16h5.334l.64-3.82A5.317 5.317 0 0013.333 8zM4 8c0-2.207 1.793-4 4-4s4 1.793 4 4-1.793 4-4 4-4-1.793-4-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="watch_svg__b" fill="#fff">
        <use xlinkHref="#watch_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#watch_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWatch
