import React, { SVGProps } from 'react'

const SvgSettingsPower = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-power_svg__a"
        d="M4.667 16H6v-1.333H4.667V16zm2.666 0h1.334v-1.333H7.333V16zM8.667 1.333H7.333V8h1.334V1.333zM11.04 2.96l-.967.967A3.98 3.98 0 0112 7.333c0 2.207-1.793 4-4 4s-4-1.793-4-4c0-1.446.773-2.706 1.92-3.413l-.96-.96a5.307 5.307 0 00-2.293 4.373A5.332 5.332 0 008 12.667a5.332 5.332 0 005.333-5.334A5.307 5.307 0 0011.04 2.96zM10 16h1.333v-1.333H10V16z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-power_svg__b" fill="#fff">
        <use xlinkHref="#settings-power_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-power_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsPower
