import React, { SVGProps } from 'react'

const SvgTabletMac = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="tablet-mac_svg__a"
        d="M12.333 0H3c-.92 0-1.667.747-1.667 1.667v12.666C1.333 15.253 2.08 16 3 16h9.333c.92 0 1.667-.747 1.667-1.667V1.667C14 .747 13.253 0 12.333 0zM7.667 15.333c-.554 0-1-.446-1-1 0-.553.446-1 1-1 .553 0 1 .447 1 1 0 .554-.447 1-1 1zm5-2.666h-10V2h10v10.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="tablet-mac_svg__b" fill="#fff">
        <use xlinkHref="#tablet-mac_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#tablet-mac_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTabletMac
