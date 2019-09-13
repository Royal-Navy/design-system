import React, { SVGProps } from 'react'

const SvgHighlightOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="highlight-off_svg__a"
        d="M9.727 5.333L8 7.06 6.273 5.333l-.94.94L7.06 8 5.333 9.727l.94.94L8 8.94l1.727 1.727.94-.94L8.94 8l1.727-1.727-.94-.94zM8 1.333A6.66 6.66 0 001.333 8 6.66 6.66 0 008 14.667 6.66 6.66 0 0014.667 8 6.66 6.66 0 008 1.333zm0 12A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="highlight-off_svg__b" fill="#fff">
        <use xlinkHref="#highlight-off_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#highlight-off_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgHighlightOff
