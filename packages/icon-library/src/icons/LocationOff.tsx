import React, { SVGProps } from 'react'

const SvgLocationOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="location-off_svg__a"
        d="M8 4.333c.92 0 1.667.747 1.667 1.667 0 .493-.22.927-.554 1.233l2.42 2.42c.654-1.24 1.134-2.533 1.134-3.653A4.663 4.663 0 004.64 2.767l2.127 2.126A1.63 1.63 0 018 4.333zm2.913 6.4L7.827 7.647l-.074-.074L2.18 2l-.847.847 2.12 2.12c-.073.333-.12.68-.12 1.033C3.333 9.5 8 14.667 8 14.667s1.113-1.234 2.253-2.9L12.487 14l.846-.847-2.42-2.42z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="location-off_svg__b" fill="#fff">
        <use xlinkHref="#location-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#location-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocationOff
