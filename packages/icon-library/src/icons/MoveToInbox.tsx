import React, { SVGProps } from 'react'

const SvgMoveToInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="move-to-inbox_svg__a"
        d="M12.667 2h-9.34c-.74 0-1.32.6-1.32 1.333L2 12.667C2 13.4 2.587 14 3.327 14h9.34C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 8H10c0 1.107-.9 2-2 2s-2-.893-2-2H3.327V3.333h9.34V10zm-2-3.333H9.333v-2H6.667v2H5.333L8 9.333l2.667-2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="move-to-inbox_svg__b" fill="#fff">
        <use xlinkHref="#move-to-inbox_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#move-to-inbox_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMoveToInbox
