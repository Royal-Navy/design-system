import React, { SVGProps } from 'react'

const SvgLeakAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="leak-add_svg__a"
        d="M4 2H2v2c1.107 0 2-.893 2-2zm5.333 0H8a6 6 0 01-6 6v1.333A7.333 7.333 0 009.333 2zM6.667 2H5.333A3.335 3.335 0 012 5.333v1.334A4.663 4.663 0 006.667 2zm0 12H8a6 6 0 016-6V6.667A7.338 7.338 0 006.667 14zM12 14h2v-2c-1.107 0-2 .893-2 2zm-2.667 0h1.334A3.335 3.335 0 0114 10.667V9.333A4.663 4.663 0 009.333 14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="leak-add_svg__b" fill="#fff">
        <use xlinkHref="#leak-add_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#leak-add_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLeakAdd
