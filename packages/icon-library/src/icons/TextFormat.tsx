import React, { SVGProps } from 'react'

const SvgTextFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="text-format_svg__a"
        d="M3.333 11.333v1.334h9.334v-1.334H3.333zm3-2.8h3.334l.6 1.467h1.4L8.5 2.667h-1L4.333 10h1.4l.6-1.467zM8 3.987l1.247 3.346H6.753L8 3.987z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="text-format_svg__b" fill="#fff">
        <use xlinkHref="#text-format_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#text-format_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTextFormat
