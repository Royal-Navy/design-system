import React, { SVGProps } from 'react'

const SvgSettingsPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-phone_svg__a"
        d="M8.667 6H7.333v1.333h1.334V6zm2.666 0H10v1.333h1.333V6zm2 4.333a7.574 7.574 0 01-2.38-.38.68.68 0 00-.68.16L8.807 11.58a10.05 10.05 0 01-4.394-4.387L5.88 5.72c.187-.18.24-.44.167-.673a7.574 7.574 0 01-.38-2.38C5.667 2.3 5.367 2 5 2H2.667C2.3 2 2 2.3 2 2.667 2 8.927 7.073 14 13.333 14c.367 0 .667-.3.667-.667V11c0-.367-.3-.667-.667-.667zM12.667 6v1.333H14V6h-1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-phone_svg__b" fill="#fff">
        <use xlinkHref="#settings-phone_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-phone_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsPhone
