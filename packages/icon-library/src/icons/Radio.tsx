import React, { SVGProps } from 'react'

const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="radio_svg__a"
        d="M2.16 4.1c-.487.187-.827.68-.827 1.233v8c0 .734.594 1.334 1.334 1.334h10.666c.74 0 1.334-.6 1.334-1.334v-8c0-.74-.594-1.333-1.334-1.333h-7.8l5.507-2.227-.453-1.106L2.16 4.1zm2.507 9.233c-1.107 0-2-.893-2-2 0-1.106.893-2 2-2 1.106 0 2 .894 2 2 0 1.107-.894 2-2 2zM13.333 8H12V6.667h-1.333V8h-8V5.333h10.666V8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="radio_svg__b" fill="#fff">
        <use xlinkHref="#radio_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#radio_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRadio
