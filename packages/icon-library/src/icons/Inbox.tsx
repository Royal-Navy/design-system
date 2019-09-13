import React, { SVGProps } from 'react'

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="inbox_svg__a"
        d="M12.667 2h-9.34c-.74 0-1.32.593-1.32 1.333L2 12.667C2 13.4 2.587 14 3.327 14h9.34C13.4 14 14 13.4 14 12.667V3.333C14 2.593 13.4 2 12.667 2zm0 8H10c0 1.107-.9 2-2 2s-2-.893-2-2H3.327V3.333h9.34V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="inbox_svg__b" fill="#fff">
        <use xlinkHref="#inbox_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#inbox_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInbox
