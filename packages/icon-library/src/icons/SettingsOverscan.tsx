import React, { SVGProps } from 'react'

const SvgSettingsOverscan = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-overscan_svg__a"
        d="M8.007 3.667l-1.34 1.666h2.666L8.007 3.667zm3.993 3v2.666l1.667-1.326L12 6.667zm-8 0l-1.667 1.34L4 9.333V6.667zm5.333 4H6.667l1.34 1.666 1.326-1.666zM14 2H2C1.267 2 .667 2.6.667 3.333v9.334C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333V3.333C15.333 2.6 14.733 2 14 2zm0 10.673H2V3.327h12v9.346z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-overscan_svg__b" fill="#fff">
        <use xlinkHref="#settings-overscan_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-overscan_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsOverscan
