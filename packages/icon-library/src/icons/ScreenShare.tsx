import React, { SVGProps } from 'react'

const SvgScreenShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="screen-share_svg__a"
        d="M13.333 12c.734 0 1.327-.6 1.327-1.333L14.667 4c0-.74-.6-1.333-1.334-1.333H2.667c-.74 0-1.334.593-1.334 1.333v6.667c0 .733.594 1.333 1.334 1.333H0v1.333h16V12h-2.667zM8.667 9.647v-1.46c-1.854 0-3.074.566-4 1.813.373-1.78 1.406-3.553 4-3.913v-1.42l2.666 2.486-2.666 2.494z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="screen-share_svg__b" fill="#fff">
        <use xlinkHref="#screen-share_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#screen-share_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgScreenShare
