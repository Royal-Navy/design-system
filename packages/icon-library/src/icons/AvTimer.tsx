import React, { SVGProps } from 'react'

const SvgAvTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="av-timer_svg__a"
        d="M7.333 11.333c0 .367.3.667.667.667.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666-.367 0-.667.3-.667.666zm0-9.333v2.667h1.334v-1.28A4.663 4.663 0 018 12.667 4.663 4.663 0 013.333 8c0-1.12.394-2.147 1.054-2.947L8 8.667l.94-.94-4.533-4.534v.014A5.969 5.969 0 002 8a6 6 0 106-6h-.667zM12 8c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667 0 .367.3.667.666.667.367 0 .667-.3.667-.667zM4 8c0 .367.3.667.667.667.366 0 .666-.3.666-.667 0-.367-.3-.667-.666-.667C4.3 7.333 4 7.633 4 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="av-timer_svg__b" fill="#fff">
        <use xlinkHref="#av-timer_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#av-timer_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAvTimer
