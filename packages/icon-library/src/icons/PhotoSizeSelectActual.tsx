import React, { SVGProps } from 'react'

const SvgPhotoSizeSelectActual = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="photo-size-select-actual_svg__a"
        d="M14 2H2C1.333 2 .667 2.667.667 3.333v9.334C.667 13.4 1.267 14 2 14h12c.667 0 1.333-.667 1.333-1.333V3.333C15.333 2.667 14.667 2 14 2zM3.333 11.333l2.334-3 1.666 2.007 2.334-3.007 3 4H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo-size-select-actual_svg__b" fill="#fff">
        <use xlinkHref="#photo-size-select-actual_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#photo-size-select-actual_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhotoSizeSelectActual
