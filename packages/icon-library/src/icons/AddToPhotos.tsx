import React, { SVGProps } from 'react'

const SvgAddToPhotos = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="add-to-photos_svg__a"
        d="M2.667 4H1.333v9.333c0 .734.6 1.334 1.334 1.334H12v-1.334H2.667V4zm10.666-2.667h-8C4.6 1.333 4 1.933 4 2.667v8C4 11.4 4.6 12 5.333 12h8c.734 0 1.334-.6 1.334-1.333v-8c0-.734-.6-1.334-1.334-1.334zm-.666 6H10V10H8.667V7.333H6V6h2.667V3.333H10V6h2.667v1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="add-to-photos_svg__b" fill="#fff">
        <use xlinkHref="#add-to-photos_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#add-to-photos_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAddToPhotos
