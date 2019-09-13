import React, { SVGProps } from 'react'

const SvgPowerSettingsNew = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="power-settings-new_svg__a"
        d="M8.667 2H7.333v6.667h1.334V2zm3.22 1.447l-.947.946A4.613 4.613 0 0112.667 8 4.663 4.663 0 018 12.667a4.663 4.663 0 01-2.947-8.28l-.94-.94A5.955 5.955 0 002 8a6 6 0 0012 0c0-1.827-.82-3.453-2.113-4.553z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="power-settings-new_svg__b" fill="#fff">
        <use xlinkHref="#power-settings-new_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#power-settings-new_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPowerSettingsNew
