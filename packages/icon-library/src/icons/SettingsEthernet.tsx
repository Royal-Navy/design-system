import React, { SVGProps } from 'react'

const SvgSettingsEthernet = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-ethernet_svg__a"
        d="M5.18 4.507l-1.027-.854L.547 8l3.606 4.347 1.027-.854L2.28 8l2.9-3.493zm-.513 4.16H6V7.333H4.667v1.334zm6.666-1.334H10v1.334h1.333V7.333zm-4 1.334h1.334V7.333H7.333v1.334zm4.514-5.014l-1.027.854L13.72 8l-2.9 3.493 1.027.854L15.453 8l-3.606-4.347z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-ethernet_svg__b" fill="#fff">
        <use xlinkHref="#settings-ethernet_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-ethernet_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsEthernet
