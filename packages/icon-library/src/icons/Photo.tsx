import React, { SVGProps } from 'react'

const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="photo_svg__a"
        d="M14 12.667V3.333C14 2.6 13.4 2 12.667 2H3.333C2.6 2 2 2.6 2 3.333v9.334C2 13.4 2.6 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667zM5.667 9l1.666 2.007L9.667 8l3 4H3.333l2.334-3z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="photo_svg__b" fill="#fff">
        <use xlinkHref="#photo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#photo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPhoto
