import React, { SVGProps } from 'react'

const SvgEventBusy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="event-busy_svg__a"
        d="M6.207 11.333l1.626-1.626 1.627 1.626.707-.706L8.54 9l1.627-1.627-.707-.706-1.627 1.626-1.626-1.626-.707.706L7.127 9 5.5 10.627l.707.706zM12.667 2H12V.667h-1.333V2H5.333V.667H4V2h-.667c-.74 0-1.326.6-1.326 1.333L2 12.667C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H3.333V5.333h9.334v7.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="event-busy_svg__b" fill="#fff">
        <use xlinkHref="#event-busy_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#event-busy_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEventBusy
