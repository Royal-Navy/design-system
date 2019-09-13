import React, { SVGProps } from 'react'

const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="timer_svg__a"
        d="M10 .667H6V2h4V.667zM7.333 9.333h1.334v-4H7.333v4zm5.354-4.406l.946-.947c-.286-.34-.6-.66-.94-.94l-.946.947A5.974 5.974 0 008 2.667a6 6 0 106 6 5.975 5.975 0 00-1.313-3.74zM8 13.333a4.663 4.663 0 01-4.667-4.666A4.663 4.663 0 018 4a4.663 4.663 0 014.667 4.667A4.663 4.663 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="timer_svg__b" fill="#fff">
        <use xlinkHref="#timer_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#timer_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTimer
