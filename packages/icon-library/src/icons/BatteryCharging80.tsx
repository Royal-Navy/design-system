import React, { SVGProps } from 'react'

const SvgBatteryCharging80 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-charging-80_svg__a"
        d="M11.556 5.778v7.555c0 .49-.4.89-.89.89H5.334a.892.892 0 01-.889-.89V3.556c0-.49.4-.89.89-.89h1.333V1.334h2.666v1.334h1.334c.489 0 .889.4.889.889v2.222zm-3.112 0V4l-.888 1.778-1.778 3.555h1.778v3.556l2.666-5.333H8.444V5.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-charging-80_svg__b" fill="#fff">
        <use xlinkHref="#battery-charging-80_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-charging-80_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryCharging80
