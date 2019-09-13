import React, { SVGProps } from 'react'

const SvgBatteryCharging90 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-charging-90_svg__a"
        d="M11.556 4.889v8.444c0 .49-.4.89-.89.89H5.334a.892.892 0 01-.889-.89V3.556c0-.49.4-.89.89-.89h.888V1.334h3.556v1.334h.889c.489 0 .889.4.889.889v1.333zm-3.112 0V4L8 4.889 5.778 9.333h1.778v3.556l2.666-5.333H8.444V4.889z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-charging-90_svg__b" fill="#fff">
        <use xlinkHref="#battery-charging-90_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-charging-90_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryCharging90
