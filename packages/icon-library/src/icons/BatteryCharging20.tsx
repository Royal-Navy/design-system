import React, { SVGProps } from 'react'

const SvgBatteryCharging20 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-charging-20_svg__a"
        d="M11.556 11.111v2.222c0 .49-.4.89-.89.89H5.334a.892.892 0 01-.889-.89V3.556c0-.49.4-.89.89-.89h1.333V1.334h2.666v1.334h1.334c.489 0 .889.4.889.889v7.555zm-3.112 0l1.778-3.555H8.444V4L5.778 9.333h1.778v3.556l.888-1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-charging-20_svg__b" fill="#fff">
        <use xlinkHref="#battery-charging-20_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-charging-20_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryCharging20
