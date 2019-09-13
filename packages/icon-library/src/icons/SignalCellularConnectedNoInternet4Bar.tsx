import React, { SVGProps } from 'react'

const SvgSignalCellularConnectedNoInternet4Bar = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-cellular-connected-no-internet-4-bar_svg__a"
        d="M10.667 4.444h3.555V.89l-3.555 3.555zm1.777 9.778h1.778v-1.778h-1.778v1.778zm0-8v4.445h1.778V6.222h-1.778zm-1.777 8V4.444L.889 14.222h9.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-connected-no-internet-4-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-connected-no-internet-4-bar_svg__a" />
      </mask>
      <g
        fill="CurrentColor"
        mask="url(#signal-cellular-connected-no-internet-4-bar_svg__b)"
      >
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellularConnectedNoInternet4Bar
