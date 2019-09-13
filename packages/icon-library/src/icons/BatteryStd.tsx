import React, { SVGProps } from 'react'

const SvgBatteryStd = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-std_svg__a"
        d="M10.667 2.667H9.333V1.333H6.667v1.334H5.333c-.489 0-.889.4-.889.889v9.777c0 .49.4.89.89.89h5.333c.489 0 .889-.4.889-.89V3.556c0-.49-.4-.89-.89-.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-std_svg__b" fill="#fff">
        <use xlinkHref="#battery-std_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-std_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryStd
