import React, { SVGProps } from 'react'

const SvgSignalWifi1Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-wifi-1-bar_svg__a"
        d="M8.007 14.213l2.813-3.5-2.811 3.5h-.002zm-.014 0H7.99L.17 4.471C.47 4.24 3.484 1.778 8 1.778s7.529 2.462 7.831 2.693l-5.011 6.241z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-wifi-1-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-wifi-1-bar_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-wifi-1-bar_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalWifi1Bar
