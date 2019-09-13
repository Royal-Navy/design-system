import React, { SVGProps } from 'react'

const SvgEditLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="edit-location_svg__a"
        d="M8 1.333A4.672 4.672 0 003.333 6C3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6A4.672 4.672 0 008 1.333zM6.96 8H6v-.96l2.233-2.227.954.954L6.96 8zm2.967-2.967L9.46 5.5l-.96-.96.467-.467c.1-.1.26-.1.36 0l.6.6c.1.1.1.26 0 .36z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="edit-location_svg__b" fill="#fff">
        <use xlinkHref="#edit-location_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#edit-location_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEditLocation
