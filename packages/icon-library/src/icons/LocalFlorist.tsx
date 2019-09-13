import React, { SVGProps } from 'react'

const SvgLocalFlorist = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-florist_svg__a"
        d="M8 14.667a6 6 0 006-6 6 6 0 00-6 6zM3.733 6.833a1.667 1.667 0 002.614 1.374l-.014.126a1.667 1.667 0 003.334 0l-.014-.126a1.667 1.667 0 002.613-1.373 1.66 1.66 0 00-.953-1.5 1.66 1.66 0 00.954-1.5A1.667 1.667 0 009.653 2.46l.014-.127a1.667 1.667 0 00-3.334 0l.014.127a1.667 1.667 0 00-2.613 1.373c0 .667.393 1.234.953 1.5a1.66 1.66 0 00-.954 1.5zM8 3.667A1.667 1.667 0 117.999 7 1.667 1.667 0 018 3.667zm-6 5a6 6 0 006 6 6 6 0 00-6-6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-florist_svg__b" fill="#fff">
        <use xlinkHref="#local-florist_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-florist_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalFlorist
