import React, { SVGProps } from 'react'

const SvgSwitchVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="switch-video_svg__a"
        d="M12 6.333V4c0-.367-.3-.667-.667-.667H2c-.367 0-.667.3-.667.667v8c0 .367.3.667.667.667h9.333c.367 0 .667-.3.667-.667V9.667l2.667 2.666V3.667L12 6.333zm-3.333 4V8.667h-4v1.666L2.333 8l2.334-2.333v1.666h4V5.667L11 8l-2.333 2.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="switch-video_svg__b" fill="#fff">
        <use xlinkHref="#switch-video_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#switch-video_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSwitchVideo
