import React, { SVGProps } from 'react'

const SvgSignalWifi2BarLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-wifi-2-bar-lock_svg__a"
        d="M10.333 10.533v.934L8 14.333l2.333-2.933v-.867zm.89-3.153l.044.02c-.6.6-.934 1.4-.934 2.267 0-.893.336-1.694.89-2.287zm4.11 3.287c.334 0 .667.333.667.666V14c0 .333-.333.667-.667.667H12c-.333 0-.667-.334-.667-.667v-2.667c0-.333.334-.666.667-.666v-1A1.65 1.65 0 0113.667 8a1.65 1.65 0 011.666 1.667v1zm-.666 0v-1c0-.534-.467-1-1-1-.534 0-1 .466-1 1v1h2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-wifi-2-bar-lock_svg__b" fill="#fff">
        <use xlinkHref="#signal-wifi-2-bar-lock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-wifi-2-bar-lock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalWifi2BarLock
