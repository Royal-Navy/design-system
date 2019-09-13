import React, { SVGProps } from 'react'

const SvgWifiTethering = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="wifi-tethering_svg__a"
        d="M8 7.333c-.733 0-1.333.6-1.333 1.334C6.667 9.4 7.267 10 8 10s1.333-.6 1.333-1.333c0-.734-.6-1.334-1.333-1.334zm4 1.334c0-2.207-1.793-4-4-4s-4 1.793-4 4c0 1.48.807 2.766 2 3.46l.667-1.16a2.665 2.665 0 01-1.334-2.3 2.666 2.666 0 115.334 0c0 .986-.54 1.833-1.334 2.3l.667 1.16c1.193-.694 2-1.98 2-3.46zM8 2a6.67 6.67 0 00-6.667 6.667 6.66 6.66 0 003.327 5.766l.667-1.153A5.332 5.332 0 018 3.333a5.329 5.329 0 012.667 9.947l.666 1.153a6.651 6.651 0 003.334-5.766A6.67 6.67 0 008 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="wifi-tethering_svg__b" fill="#fff">
        <use xlinkHref="#wifi-tethering_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#wifi-tethering_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWifiTethering
