import React, { SVGProps } from 'react'

const SvgAccessAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="access-alarm_svg__a"
        d="M14.667 3.813L11.6 1.24l-.86 1.02 3.067 2.573.86-1.02zM5.253 2.26L4.4 1.24 1.333 3.807l.86 1.02 3.06-2.567zm3.08 3.073h-1v4l3.167 1.9.5-.82-2.667-1.58v-3.5zM8 2.667a6 6 0 10.001 12 6 6 0 00-.001-12zm0 10.666a4.663 4.663 0 01-4.667-4.666A4.663 4.663 0 018 4a4.663 4.663 0 014.667 4.667A4.663 4.663 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="access-alarm_svg__b" fill="#fff">
        <use xlinkHref="#access-alarm_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#access-alarm_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgAccessAlarm
