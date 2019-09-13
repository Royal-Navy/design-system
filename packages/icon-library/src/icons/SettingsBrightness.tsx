import React, { SVGProps } from 'react'

const SvgSettingsBrightness = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-brightness_svg__a"
        d="M14 2H2C1.267 2 .667 2.6.667 3.333v9.334C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333V3.333C15.333 2.6 14.733 2 14 2zm0 10.673H2V3.327h12v9.346zm-8.667-2.006H7l1 1 1-1h1.667V9l1-1-1-1V5.333H9l-1-1-1 1H5.333V7l-1 1 1 1v1.667zM8 6c1.107 0 2 .893 2 2s-.893 2-2 2V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-brightness_svg__b" fill="#fff">
        <use xlinkHref="#settings-brightness_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-brightness_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsBrightness
