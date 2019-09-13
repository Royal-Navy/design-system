import React, { SVGProps } from 'react'

const SvgNotificationsPaused = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="notifications-paused_svg__a"
        d="M8 14.667c.733 0 1.333-.6 1.333-1.334H6.667c0 .734.593 1.334 1.333 1.334zm4-4V7.333c0-2.046-1.093-3.76-3-4.213v-.453c0-.554-.447-1-1-1-.553 0-1 .446-1 1v.453c-1.913.453-3 2.167-3 4.213v3.334L2.667 12v.667h10.666V12L12 10.667zM9.667 6.533L7.8 8.8h1.867V10H6.333V8.8L8.2 6.533H6.333v-1.2h3.334v1.2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="notifications-paused_svg__b" fill="#fff">
        <use xlinkHref="#notifications-paused_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#notifications-paused_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNotificationsPaused
