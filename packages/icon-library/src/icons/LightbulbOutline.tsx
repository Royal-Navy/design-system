import React, { SVGProps } from 'react'

const SvgLightbulbOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="lightbulb-outline_svg__a"
        d="M6 14c0 .367.3.667.667.667h2.666c.367 0 .667-.3.667-.667v-.667H6V14zM8 1.333A4.672 4.672 0 003.333 6c0 1.587.794 2.98 2 3.827v1.506c0 .367.3.667.667.667h4c.367 0 .667-.3.667-.667V9.827c1.206-.847 2-2.24 2-3.827A4.672 4.672 0 008 1.333zm1.9 7.4l-.567.4v1.534H6.667V9.133l-.567-.4A3.331 3.331 0 014.667 6a3.335 3.335 0 016.666 0A3.331 3.331 0 019.9 8.733z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="lightbulb-outline_svg__b" fill="#fff">
        <use xlinkHref="#lightbulb-outline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#lightbulb-outline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLightbulbOutline
