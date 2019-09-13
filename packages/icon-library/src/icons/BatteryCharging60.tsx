import React, { SVGProps } from 'react'

const SvgBatteryCharging60 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-charging-60_svg__a"
        d="M11.556 7.556v5.777c0 .49-.4.89-.89.89H5.334a.892.892 0 01-.889-.89V3.556c0-.49.4-.89.89-.89h1.333V1.334h2.666v1.334h1.334c.489 0 .889.4.889.889v4zm-1.334 0H8.444V4L6.667 7.556l-.89 1.777h1.779v3.556l2.666-5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-charging-60_svg__b" fill="#fff">
        <use xlinkHref="#battery-charging-60_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-charging-60_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryCharging60
