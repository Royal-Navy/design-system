import React, { SVGProps } from 'react'

const SvgSignalCellularConnectedNoInternet2Bar = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-cellular-connected-no-internet-2-bar_svg__a"
        d="M14.222.889v3.555h-3.555L14.222.89zM.89 14.222l9.778-9.778v9.778H.889zm8 0v-8l-8 8h8zm3.555-8h1.778v4.445h-1.778V6.222zm0 8v-1.778h1.778v1.778h-1.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-cellular-connected-no-internet-2-bar_svg__b" fill="#fff">
        <use xlinkHref="#signal-cellular-connected-no-internet-2-bar_svg__a" />
      </mask>
      <g
        fill="CurrentColor"
        mask="url(#signal-cellular-connected-no-internet-2-bar_svg__b)"
      >
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalCellularConnectedNoInternet2Bar
