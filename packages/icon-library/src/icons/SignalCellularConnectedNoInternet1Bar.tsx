import React, { SVGProps } from 'react'

const SvgSignalCellularConnectedNoInternet1Bar = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-cellular-connected-no-internet-1-bar_svg__a"
        d="M10.667 14.222H.889l9.778-9.778v9.778zm0-9.778L14.222.89v3.555h-3.555zm1.777 9.778v-1.778h1.778v1.778h-1.778zm0-8h1.778v4.445h-1.778V6.222z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-connected-no-internet-1-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-connected-no-internet-1-bar_svg__a" />
      </mask>
      <g
        fill="CurrentColor"
        mask="url(#signal-cellular-connected-no-internet-1-bar_svg__b)"
      >
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellularConnectedNoInternet1Bar
