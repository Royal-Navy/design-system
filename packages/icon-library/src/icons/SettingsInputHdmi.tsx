import React, { SVGProps } from 'react'

const SvgSettingsInputHdmi = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-input-hdmi_svg__a"
        d="M12 4.667v-2c0-.734-.6-1.334-1.333-1.334H5.333C4.6 1.333 4 1.933 4 2.667v2h-.667v4l2 4v2h5.334v-2l2-4v-4H12zm-6.667-2h5.334v2H9.333V3.333h-.666v1.334H7.333V3.333h-.666v1.334H5.333v-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-input-hdmi_svg__b" fill="#fff">
        <use xlinkHref="#settings-input-hdmi_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-input-hdmi_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsInputHdmi
