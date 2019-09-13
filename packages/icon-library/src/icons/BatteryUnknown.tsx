import React, { SVGProps } from 'react'

const SvgBatteryUnknown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="battery-unknown_svg__a"
        d="M10.667 2.667H9.333V1.333H6.667v1.334H5.333c-.489 0-.889.4-.889.889v9.777c0 .49.4.89.89.89h5.333c.489 0 .889-.4.889-.89V3.556c0-.49-.4-.89-.89-.89zm-1.956 9.6H7.29v-1.423H8.71v1.423zm.996-4.347s-.285.311-.498.524c-.356.356-.613.996-.613 1.334H7.289c0-.614.462-1.28.809-1.627l.693-.702c.205-.205.329-.48.329-.782a1.112 1.112 0 00-2.222 0h-1.12a2.223 2.223 0 014.444 0c0 .489-.195.933-.515 1.253z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="battery-unknown_svg__b" fill="#fff">
        <use xlinkHref="#battery-unknown_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#battery-unknown_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBatteryUnknown
