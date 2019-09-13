import React, { SVGProps } from 'react'

const SvgBatteryCharging30 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-charging-30_svg__a"
        d="M10.667 2.667c.489 0 .889.4.889.889v5.777H9.333l.89-1.777H8.443V4L5.778 9.333H4.444V3.556c0-.49.4-.89.89-.89h1.333V1.334h2.666v1.334h1.334zM7.556 12.889l1.777-3.556h2.223v4c0 .49-.4.89-.89.89H5.334a.892.892 0 01-.889-.89v-4h3.112v3.556z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-charging-30_svg__b" fill="#fff">
        <use xlinkHref="#battery-charging-30_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-charging-30_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryCharging30
