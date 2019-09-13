import React, { SVGProps } from 'react'

const SvgSmokingRooms = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="smoking-rooms_svg__a"
        d="M1.333 10.667h10v2h-10v-2zm12.334 0h1v2h-1v-2zm-1.667 0h1v2h-1v-2zm.567-5.514c.413-.406.666-.966.666-1.586 0-1.234-1-2.234-2.233-2.234v1A1.235 1.235 0 0111 4.8v1c1.493 0 2.667 1.22 2.667 2.713V10h1V8.507c0-1.48-.854-2.76-2.1-3.354zM10.687 6.8h-1.02c-.68 0-1.234-.653-1.234-1.333 0-.68.554-1.167 1.234-1.167v-1a2.233 2.233 0 000 4.467h1.02c.7 0 1.313.493 1.313 1.366V10h1V8.907C13 7.7 11.933 6.8 10.687 6.8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="smoking-rooms_svg__b" fill="#fff">
        <use xlinkHref="#smoking-rooms_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#smoking-rooms_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSmokingRooms
