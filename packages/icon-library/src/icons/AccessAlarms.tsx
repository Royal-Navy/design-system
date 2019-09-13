import React, { SVGProps } from 'react'

const SvgAccessAlarms = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="access-alarms_svg__a"
        d="M14.667 3.8L11.6 1.2l-.867 1L13.8 4.8l.867-1zm-9.4-1.533l-.867-1L1.333 3.8l.867 1 3.067-2.533zm3.066 3.066h-1v4l3.134 1.934.533-.8-2.667-1.6V5.333zM8 2.667c-3.333 0-6 2.666-6 6 0 3.333 2.667 6 6 6s6-2.667 6-6c0-3.334-2.667-6-6-6zm0 10.666a4.638 4.638 0 01-4.667-4.666C3.333 6.067 5.4 4 8 4c2.6 0 4.667 2.067 4.667 4.667 0 2.6-2.067 4.666-4.667 4.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="access-alarms_svg__b" fill="#fff">
        <use xlinkHref="#access-alarms_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#access-alarms_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAccessAlarms
