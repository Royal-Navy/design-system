import React, { SVGProps } from 'react'

const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="broken-image_svg__a"
        d="M14 3.333v4.394L12 5.72 9.333 8.393 6.667 5.727 4 8.393 2 6.387V3.333C2 2.6 2.6 2 3.333 2h9.334C13.4 2 14 2.6 14 3.333zm-2 4.28l2 2.007v3.047C14 13.4 13.4 14 12.667 14H3.333C2.6 14 2 13.4 2 12.667V8.28l2 1.993 2.667-2.666 2.666 2.666L12 7.613z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="broken-image_svg__b" fill="#fff">
        <use xlinkHref="#broken-image_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#broken-image_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBrokenImage
