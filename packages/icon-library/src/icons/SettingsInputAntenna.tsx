import React, { SVGProps } from 'react'

const SvgSettingsInputAntenna = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-input-antenna_svg__a"
        d="M8 3.333A4.663 4.663 0 003.333 8h1.334a3.335 3.335 0 016.666 0h1.334A4.663 4.663 0 008 3.333zm.667 6.194c.586-.26 1-.84 1-1.527a1.667 1.667 0 00-3.334 0c0 .68.414 1.267 1 1.527v2.2L5.06 14l.94.94 2-2 2 2 .94-.94-2.273-2.273v-2.2zM8 .667A7.338 7.338 0 00.667 8H2a6 6 0 0112 0h1.333A7.338 7.338 0 008 .667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-input-antenna_svg__b" fill="#fff">
        <use xlinkHref="#settings-input-antenna_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-input-antenna_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsInputAntenna
