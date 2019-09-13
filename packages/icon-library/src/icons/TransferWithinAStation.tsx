import React, { SVGProps } from 'react'

const SvgTransferWithinAStation = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="transfer-within-a-station_svg__a"
        d="M10.993 10.333V9.167l-1.66 1.666 1.66 1.667v-1.167h3.674v-1h-3.674zm2.014 2.834H9.333v1h3.674v1.166l1.66-1.666L13.007 12v1.167zm-6.674-9.5c.734 0 1.334-.6 1.334-1.334C7.667 1.6 7.067 1 6.333 1 5.6 1 5 1.6 5 2.333c0 .734.6 1.334 1.333 1.334zm-2.5 2.266L2 15.333h1.4L4.567 10 6 11.333v4h1.333V10.3L5.967 8.933l.4-2A4.652 4.652 0 0010 8.667V7.333c-1.233 0-2.3-.666-2.9-1.633l-.633-1.067A1.3 1.3 0 005.333 4c-.166 0-.333.033-.5.1l-3.5 1.433v3.134h1.334V6.433l1.166-.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="transfer-within-a-station_svg__b" fill="#fff">
        <use xlinkHref="#transfer-within-a-station_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#transfer-within-a-station_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTransferWithinAStation
