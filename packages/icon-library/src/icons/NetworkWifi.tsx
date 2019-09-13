import React, { SVGProps } from 'react'

const SvgNetworkWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="network-wifi_svg__a"
        d="M8 14.213h-.009L.17 4.471C.47 4.24 3.484 1.778 8 1.778s7.529 2.462 7.831 2.693l-2.253 2.806.004.003-5.573 6.933-.009.01v-.01z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="network-wifi_svg__b" fill="#fff">
        <use xlinkHref="#network-wifi_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#network-wifi_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNetworkWifi
