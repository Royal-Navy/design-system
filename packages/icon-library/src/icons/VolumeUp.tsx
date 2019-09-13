import React, { SVGProps } from 'react'

const SvgVolumeUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="volume-up_svg__a"
        d="M11.369 8c0-1.156-.64-2.151-1.591-2.667v5.334A3.04 3.04 0 0011.368 8zM1.778 6.222v3.556h2.666L8 13.333V2.667L4.444 6.222H1.778zm8-4.444V3.11A5.133 5.133 0 0113.333 8a5.133 5.133 0 01-3.555 4.889v1.333c2.8-.693 4.889-3.2 4.889-6.222 0-3.022-2.09-5.529-4.89-6.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="volume-up_svg__b" fill="#fff">
        <use xlinkHref="#volume-up_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#volume-up_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVolumeUp
