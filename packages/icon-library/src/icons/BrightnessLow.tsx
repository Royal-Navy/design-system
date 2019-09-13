import React, { SVGProps } from 'react'

const SvgBrightnessLow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="brightness-low_svg__a"
        d="M13.333 10.207L15.54 8l-2.207-2.207V2.667h-3.126L8 .46 5.793 2.667H2.667v3.126L.46 8l2.207 2.207v3.126h3.126L8 15.54l2.207-2.207h3.126v-3.126zM8 12c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="brightness-low_svg__b" fill="#fff">
        <use xlinkHref="#brightness-low_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#brightness-low_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrightnessLow
