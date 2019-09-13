import React, { SVGProps } from 'react'

const SvgOfflinePin = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="offline-pin_svg__a"
        d="M8 1.333c-3.667 0-6.667 3-6.667 6.667s3 6.667 6.667 6.667 6.667-3 6.667-6.667-3-6.667-6.667-6.667zM11.333 12H4.667v-1.333h6.666V12zM6.867 9.333l-2.2-2.2L5.6 6.2l1.267 1.267L10.4 3.933l.933.934-4.466 4.466z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="offline-pin_svg__b" fill="#fff">
        <use xlinkHref="#offline-pin_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#offline-pin_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgOfflinePin
