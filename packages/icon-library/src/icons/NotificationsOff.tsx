import React, { SVGProps } from 'react'

const SvgNotificationsOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="notifications-off_svg__a"
        d="M13.333 12.46L5.227 4.093 3.513 2.327l-.846.846L4.533 5.04v.007C4.187 5.707 4 6.487 4 7.327v3.333l-1.333 1.333v.667h9.153l1.333 1.333.847-.846-.667-.687zM8 14.667c.74 0 1.333-.594 1.333-1.334H6.667c0 .74.593 1.334 1.333 1.334zm4-4.88V7.333c0-2.053-1.093-3.76-3-4.213v-.453c0-.554-.447-1-1-1-.553 0-1 .446-1 1v.453c-.1.02-.193.053-.28.08-.067.02-.133.047-.2.073h-.007c-.006 0-.006 0-.013.007-.153.06-.307.133-.453.207 0 0-.007 0-.007.006L12 9.787z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="notifications-off_svg__b" fill="#fff">
        <use xlinkHref="#notifications-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#notifications-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNotificationsOff
