import React, { SVGProps } from 'react'

const SvgSignalWifi4BarLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="signal-wifi-4-bar-lock_svg__a"
        d="M15.333 10.667v-1A1.65 1.65 0 0013.667 8 1.65 1.65 0 0012 9.667v1c-.333 0-.667.333-.667.666V14c0 .333.334.667.667.667h3.333c.334 0 .667-.334.667-.667v-2.667c0-.333-.333-.666-.667-.666zm-.666 0h-2v-1c0-.534.466-1 1-1 .533 0 1 .466 1 1v1zm-4.334-1a3.301 3.301 0 013.334-3.334c.266 0 .466 0 .666.067l1.4-1.733C15.467 4.467 12.467 2 8 2S.533 4.467.267 4.667L8 14.333l2.333-2.933V9.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="signal-wifi-4-bar-lock_svg__b" fill="#fff">
        <use xlinkHref="#signal-wifi-4-bar-lock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#signal-wifi-4-bar-lock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSignalWifi4BarLock
