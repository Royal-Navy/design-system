import React, { SVGProps } from 'react'

const SvgSignalWifi0Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-wifi-0-bar_svg__a"
        d="M8.009 14.213l7.822-9.742C15.53 4.24 12.516 1.778 8 1.778S.471 4.24.169 4.47l7.822 9.742h.018z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-wifi-0-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-wifi-0-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-wifi-0-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalWifi0Bar
