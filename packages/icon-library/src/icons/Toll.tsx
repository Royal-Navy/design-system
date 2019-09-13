import React, { SVGProps } from 'react'

const SvgToll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="toll_svg__a"
        d="M10 2.667A5.332 5.332 0 004.667 8 5.332 5.332 0 0010 13.333 5.332 5.332 0 0015.333 8 5.332 5.332 0 0010 2.667zM10 12c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zM2 8c0-1.74 1.113-3.22 2.667-3.767V2.84a5.33 5.33 0 00-4 5.16 5.33 5.33 0 004 5.16v-1.393A3.994 3.994 0 012 8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="toll_svg__b" fill="#fff">
        <use xlinkHref="#toll_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#toll_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgToll
