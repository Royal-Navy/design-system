import React, { SVGProps } from 'react'

const SvgSettingsVoice = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-voice_svg__a"
        d="M4.667 16H6v-1.333H4.667V16zM8 8.667a1.992 1.992 0 001.993-2l.007-4c0-1.107-.893-2-2-2s-2 .893-2 2v4c0 1.106.893 2 2 2zM7.333 16h1.334v-1.333H7.333V16zM10 16h1.333v-1.333H10V16zm2.667-9.333h-1.134c0 2-1.693 3.4-3.533 3.4-1.84 0-3.533-1.4-3.533-3.4H3.333c0 2.273 1.814 4.153 4 4.48v2.186h1.334v-2.186c2.186-.327 4-2.207 4-4.48z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-voice_svg__b" fill="#fff">
        <use xlinkHref="#settings-voice_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-voice_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsVoice
