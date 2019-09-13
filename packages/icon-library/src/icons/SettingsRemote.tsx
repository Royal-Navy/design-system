import React, { SVGProps } from 'react'

const SvgSettingsRemote = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings-remote_svg__a"
        d="M10 6H6c-.367 0-.667.3-.667.667v8c0 .366.3.666.667.666h4c.367 0 .667-.3.667-.666v-8c0-.367-.3-.667-.667-.667zm-2 4c-.733 0-1.333-.6-1.333-1.333 0-.734.6-1.334 1.333-1.334s1.333.6 1.333 1.334C9.333 9.4 8.733 10 8 10zM4.7 4.033l.94.94a3.348 3.348 0 014.72 0l.94-.94A4.65 4.65 0 008 2.667a4.65 4.65 0 00-3.3 1.366zM8 0a7.31 7.31 0 00-5.187 2.147l.94.94A6.007 6.007 0 018 1.333c1.66 0 3.16.674 4.24 1.76l.94-.94A7.261 7.261 0 008 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings-remote_svg__b" fill="#fff">
        <use xlinkHref="#settings-remote_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings-remote_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettingsRemote
