import React, { SVGProps } from 'react'

const SvgBatteryCharging50 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-charging-50_svg__a"
        d="M11.556 8.444v4.89c0 .488-.4.888-.89.888H5.334a.892.892 0 01-.889-.889V3.556c0-.49.4-.89.89-.89h1.333V1.334h2.666v1.334h1.334c.489 0 .889.4.889.889v4.888zm-1.778 0l.444-.888H8.444V4L6.222 8.444l-.444.89h1.778v3.555l2.222-4.445z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-charging-50_svg__b" fill="#fff">
        <use xlinkHref="#battery-charging-50_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-charging-50_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryCharging50
