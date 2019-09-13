import React, { SVGProps } from 'react'

const SvgPermContactCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="perm-contact-calendar_svg__a"
        d="M12.667 2H12V.667h-1.333V2H5.333V.667H4V2h-.667C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zM8 4c1.107 0 2 .893 2 2s-.893 2-2 2-2-.893-2-2 .893-2 2-2zm4 8H4v-.667C4 10 6.667 9.267 8 9.267c1.333 0 4 .733 4 2.066V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="perm-contact-calendar_svg__b" fill="#fff">
        <use xlinkHref="#perm-contact-calendar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#perm-contact-calendar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPermContactCalendar
