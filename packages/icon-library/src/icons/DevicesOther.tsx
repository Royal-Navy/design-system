import React, { SVGProps } from 'react'

const SvgDevicesOther = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="devices-other_svg__a"
        d="M2 4h12V2.667H2c-.733 0-1.333.6-1.333 1.333v8c0 .733.6 1.333 1.333 1.333h2.667V12H2V4zm6.667 4H6v1.187a1.98 1.98 0 00-.667 1.48c0 .593.26 1.113.667 1.48v1.186h2.667v-1.186a1.99 1.99 0 00.666-1.48 1.99 1.99 0 00-.666-1.48V8zm-1.334 3.667c-.553 0-1-.447-1-1 0-.554.447-1 1-1 .554 0 1 .446 1 1 0 .553-.446 1-1 1zm7.334-6.334h-4c-.334 0-.667.334-.667.667v6.667c0 .333.333.666.667.666h4c.333 0 .666-.333.666-.666V6c0-.333-.333-.667-.666-.667zM14 12h-2.667V6.667H14V12z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="devices-other_svg__b" fill="#fff">
        <use xlinkHref="#devices-other_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#devices-other_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDevicesOther
