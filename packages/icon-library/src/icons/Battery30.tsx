import React, { SVGProps } from 'react'

const SvgBattery30 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-30_svg__a"
        d="M11.556 10.222v3.111c0 .49-.4.89-.89.89H5.334a.892.892 0 01-.889-.89V3.556c0-.49.4-.89.89-.89h1.333V1.334h2.666v1.334h1.334c.489 0 .889.4.889.889v6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-30_svg__b" fill="#fff">
        <use xlinkHref="#battery-30_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-30_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBattery30
