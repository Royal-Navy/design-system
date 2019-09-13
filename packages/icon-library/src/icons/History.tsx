import React, { SVGProps } from 'react'

const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="history_svg__a"
        d="M8.667 2a6 6 0 00-6 6h-2l2.593 2.593.047.094L6 8H4a4.663 4.663 0 014.667-4.667A4.663 4.663 0 0113.333 8a4.663 4.663 0 01-4.666 4.667 4.63 4.63 0 01-3.294-1.374l-.946.947A5.97 5.97 0 008.667 14a6 6 0 000-12zM8 5.333v3.334l2.853 1.693.48-.807L9 8.167V5.333H8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="history_svg__b" fill="#fff">
        <use xlinkHref="#history_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#history_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHistory
