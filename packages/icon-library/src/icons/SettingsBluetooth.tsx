import React, { SVGProps } from 'react'

const SvgSettingsBluetooth = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-bluetooth_svg__a"
        d="M7.333 16h1.334v-1.333H7.333V16zm-2.666 0H6v-1.333H4.667V16zM10 16h1.333v-1.333H10V16zm1.807-12.193L8 0h-.667v5.06L4.273 2l-.94.94L7.06 6.667l-3.727 3.726.94.94 3.06-3.06v5.06H8l3.807-3.806-2.867-2.86 2.867-2.86zm-3.14-1.254L9.92 3.807 8.667 5.06V2.553zM9.92 9.527L8.667 10.78V8.273L9.92 9.527z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-bluetooth_svg__b" fill="#fff">
        <use xlinkHref="#settings-bluetooth_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-bluetooth_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsBluetooth
