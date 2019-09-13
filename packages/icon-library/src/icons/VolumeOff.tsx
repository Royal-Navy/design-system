import React, { SVGProps } from 'react'

const SvgVolumeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="volume-off_svg__a"
        d="M11 8a3 3 0 00-1.667-2.687v1.474l1.634 1.633c.02-.133.033-.273.033-.42zm1.667 0c0 .627-.134 1.213-.36 1.76l1.006 1.007C13.753 9.94 14 9 14 8a5.998 5.998 0 00-4.667-5.847v1.374A4.67 4.67 0 0112.667 8zm-9.82-6L2 2.847 5.153 6H2v4h2.667L8 13.333V8.847l2.833 2.833c-.446.347-.946.62-1.5.787v1.373a5.993 5.993 0 002.46-1.207L13.153 14l.847-.847-6-6L2.847 2zM8 2.667L6.607 4.06 8 5.453V2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="volume-off_svg__b" fill="#fff">
        <use xlinkHref="#volume-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#volume-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVolumeOff
