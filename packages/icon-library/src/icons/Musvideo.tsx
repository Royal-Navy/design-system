import React, { SVGProps } from 'react'

const SvgMusvideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="musvideo_svg__a"
        d="M14 2H2C1.267 2 .667 2.6.667 3.333v9.334C.667 13.4 1.267 14 2 14h12c.733 0 1.333-.6 1.333-1.333V3.333C15.333 2.6 14.733 2 14 2zm0 10.667H2V3.333h12v9.334zM5.333 10c0-1.107.894-2 2-2 .234 0 .46.047.667.12V4h3.333v1.333h-2v4.687a2.002 2.002 0 01-2 1.98c-1.106 0-2-.893-2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="musvideo_svg__b" fill="#fff">
        <use xlinkHref="#musvideo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#musvideo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMusvideo
