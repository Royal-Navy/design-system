import React, { SVGProps } from 'react'

const SvgHourglassFull = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="hourglass-full_svg__a"
        d="M4 1.333v4h.007L4 5.34 6.667 8 4 10.667l.007.006H4v3.994h8v-3.994h-.007l.007-.006L9.333 8 12 5.34l-.007-.007H12v-4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="hourglass-full_svg__b" fill="#fff">
        <use xlinkHref="#hourglass-full_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#hourglass-full_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHourglassFull
