import React, { SVGProps } from 'react'

const SvgVideocamOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="videocam-off_svg__a"
        d="M14 4.333L11.333 7V4.667c0-.367-.3-.667-.666-.667h-4.12L14 11.453v-7.12zm-11.82-3l-.847.847L3.153 4h-.486C2.3 4 2 4.3 2 4.667v6.666c0 .367.3.667.667.667h8c.14 0 .26-.053.36-.12L13.153 14l.847-.847L2.18 1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="videocam-off_svg__b" fill="#fff">
        <use xlinkHref="#videocam-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#videocam-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVideocamOff
