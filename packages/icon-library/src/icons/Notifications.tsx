import React, { SVGProps } from 'react'

const SvgNotifications = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="notifications_svg__a"
        d="M8 14.667c.733 0 1.333-.6 1.333-1.334H6.667c0 .734.593 1.334 1.333 1.334zm4-4V7.333c0-2.046-1.093-3.76-3-4.213v-.453c0-.554-.447-1-1-1-.553 0-1 .446-1 1v.453c-1.913.453-3 2.16-3 4.213v3.334L2.667 12v.667h10.666V12L12 10.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="notifications_svg__b" fill="#fff">
        <use xlinkHref="#notifications_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#notifications_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNotifications
