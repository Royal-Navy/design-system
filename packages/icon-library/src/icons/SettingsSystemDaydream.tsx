import React, { SVGProps } from 'react'

const SvgSettingsSystemDaydream = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-system-daydream_svg__a"
        d="M6 10.667h4.333a1.667 1.667 0 000-3.334H10.3a2.328 2.328 0 00-2.3-2A2.33 2.33 0 005.893 6.68h-.106A1.996 1.996 0 004 8.667c0 1.106.893 2 2 2zM14 2H2C1.267 2 .667 2.6.667 3.333v9.334C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333V3.333C15.333 2.6 14.733 2 14 2zm0 10.673H2V3.327h12v9.346z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-system-daydream_svg__b" fill="#fff">
        <use xlinkHref="#settings-system-daydream_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-system-daydream_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsSystemDaydream
