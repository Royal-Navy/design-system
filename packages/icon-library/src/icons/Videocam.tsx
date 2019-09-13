import React, { SVGProps } from 'react'

const SvgVideocam = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="videocam_svg__a"
        d="M11.333 7V4.667c0-.367-.3-.667-.666-.667h-8C2.3 4 2 4.3 2 4.667v6.666c0 .367.3.667.667.667h8c.366 0 .666-.3.666-.667V9L14 11.667V4.333L11.333 7z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="videocam_svg__b" fill="#fff">
        <use xlinkHref="#videocam_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#videocam_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVideocam
