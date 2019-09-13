import React, { SVGProps } from 'react'

const SvgFilterTiltShift = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="filter-tilt-shift_svg__a"
        d="M7.333 2.713V1.367A6.633 6.633 0 003.787 2.84l.946.953a5.294 5.294 0 012.6-1.08zm4.88.127a6.633 6.633 0 00-3.546-1.473v1.346c.973.12 1.86.507 2.6 1.08l.946-.953zm1.074 4.493h1.346a6.633 6.633 0 00-1.473-3.546l-.953.946c.573.74.96 1.627 1.08 2.6zm-9.494-2.6l-.953-.946a6.633 6.633 0 00-1.473 3.546h1.346c.12-.973.507-1.86 1.08-2.6zm-1.08 3.934H1.367a6.633 6.633 0 001.473 3.546l.953-.953a5.245 5.245 0 01-1.08-2.593zM10 8c0-1.107-.893-2-2-2s-2 .893-2 2 .893 2 2 2 2-.893 2-2zm2.207 3.267l.953.953a6.654 6.654 0 001.473-3.547h-1.346a5.297 5.297 0 01-1.08 2.594zm-3.54 2.02v1.346a6.633 6.633 0 003.546-1.473l-.953-.953c-.733.573-1.62.96-2.593 1.08zm-4.88-.127a6.654 6.654 0 003.546 1.473v-1.346a5.294 5.294 0 01-2.6-1.08l-.946.953z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="filter-tilt-shift_svg__b" fill="#fff">
        <use xlinkHref="#filter-tilt-shift_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#filter-tilt-shift_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFilterTiltShift
