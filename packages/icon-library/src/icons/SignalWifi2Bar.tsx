import React, { SVGProps } from 'react'

const SvgSignalWifi2Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-wifi-2-bar_svg__a"
        d="M8 14.213l4.453-5.546C12.231 8.497 10.533 7.11 8 7.11c-2.533 0-4.231 1.387-4.462 1.556l4.453 5.546.009.01v-.01h-.009L.17 4.471C.47 4.24 3.484 1.778 8 1.778s7.529 2.462 7.831 2.693L8.01 14.213H8z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-wifi-2-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-wifi-2-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-wifi-2-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalWifi2Bar
