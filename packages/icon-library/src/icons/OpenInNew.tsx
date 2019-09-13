import React, { SVGProps } from 'react'

const SvgOpenInNew = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="open-in-new_svg__a"
        d="M12.667 12.667H3.333V3.333H8V2H3.333C2.593 2 2 2.6 2 3.333v9.334C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V8h-1.333v4.667zM9.333 2v1.333h2.394L5.173 9.887l.94.94 6.554-6.554v2.394H14V2H9.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="open-in-new_svg__b" fill="#fff">
        <use xlinkHref="#open-in-new_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#open-in-new_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgOpenInNew
