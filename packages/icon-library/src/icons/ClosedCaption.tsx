import React, { SVGProps } from 'react'

const SvgClosedCaption = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="closed-caption_svg__a"
        d="M12.667 2.667H3.333C2.593 2.667 2 3.267 2 4v8c0 .733.593 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333zM7.333 7.333h-1V7H5v2h1.333v-.333h1v.666c0 .367-.3.667-.666.667h-2A.669.669 0 014 9.333V6.667C4 6.3 4.3 6 4.667 6h2c.366 0 .666.3.666.667v.666zm4.667 0h-1V7H9.667v2H11v-.333h1v.666c0 .367-.3.667-.667.667h-2a.669.669 0 01-.666-.667V6.667c0-.367.3-.667.666-.667h2c.367 0 .667.3.667.667v.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="closed-caption_svg__b" fill="#fff">
        <use xlinkHref="#closed-caption_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#closed-caption_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgClosedCaption
