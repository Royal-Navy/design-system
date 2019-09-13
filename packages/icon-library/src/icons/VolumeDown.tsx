import React, { SVGProps } from 'react'

const SvgVolumeDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="volume-down_svg__a"
        d="M3.556 6.222v3.556h2.666l3.556 3.555V2.667L6.222 6.222H3.556zm8-.889v5.334A2.897 2.897 0 0013.333 8c0-1.2-.737-2.231-1.777-2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="volume-down_svg__b" fill="#fff">
        <use xlinkHref="#volume-down_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#volume-down_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVolumeDown
