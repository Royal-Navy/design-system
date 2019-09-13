import React, { SVGProps } from 'react'

const SvgBrightness4 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="brightness-4_svg__a"
        d="M13.333 5.793V2.667h-3.126L8 .46 5.793 2.667H2.667v3.126L.46 8l2.207 2.207v3.126h3.126L8 15.54l2.207-2.207h3.126v-3.126L15.54 8l-2.207-2.207zM8 12c-.593 0-1.16-.133-1.667-.367A4.004 4.004 0 008.667 8c0-1.613-.96-3-2.334-3.633A3.983 3.983 0 018 4c2.207 0 4 1.793 4 4s-1.793 4-4 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brightness-4_svg__b" fill="#fff">
        <use xlinkHref="#brightness-4_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brightness-4_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrightness4
