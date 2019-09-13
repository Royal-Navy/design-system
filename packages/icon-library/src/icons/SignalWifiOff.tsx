import React, { SVGProps } from 'react'

const SvgSignalWifiOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-wifi-off_svg__a"
        d="M15.831 4.471C15.53 4.24 12.516 1.778 8 1.778c-1.076 0-2.062.142-2.951.355l7.022 7.014 3.76-4.676zM1.333 1.813l1.21 1.21C1.163 3.67.32 4.355.168 4.47l7.822 9.742.009.01.009-.01 2.551-3.182.053.053 2.214 2.214.844-.854L2.178.96l-.845.853z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-wifi-off_svg__b" fill="#fff">
        <use xlinkHref="#signal-wifi-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-wifi-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalWifiOff
