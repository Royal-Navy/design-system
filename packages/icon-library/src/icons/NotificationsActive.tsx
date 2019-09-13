import React, { SVGProps } from 'react'

const SvgNotificationsActive = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="notifications-active_svg__a"
        d="M5.053 2.72L4.1 1.767A6.95 6.95 0 001.353 7h1.334a5.63 5.63 0 012.366-4.28zM13.313 7h1.334A6.992 6.992 0 0011.9 1.767l-.947.953A5.664 5.664 0 0113.313 7zM12 7.333c0-2.046-1.093-3.76-3-4.213v-.453c0-.554-.447-1-1-1-.553 0-1 .446-1 1v.453c-1.913.453-3 2.16-3 4.213v3.334L2.667 12v.667h10.666V12L12 10.667V7.333zm-4 7.334c.093 0 .18-.007.267-.027.433-.093.786-.387.96-.787.066-.16.1-.333.1-.52H6.66c.007.734.6 1.334 1.34 1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="notifications-active_svg__b" fill="#fff">
        <use xlinkHref="#notifications-active_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#notifications-active_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNotificationsActive
