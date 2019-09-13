import React, { SVGProps } from 'react'

const SvgToday = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="today_svg__a"
        d="M12.667 2H12V.667h-1.333V2H5.333V.667H4V2h-.667c-.74 0-1.326.6-1.326 1.333L2 12.667C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H3.333V5.333h9.334v7.334zm-8-6H8V10H4.667V6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="today_svg__b" fill="#fff">
        <use xlinkHref="#today_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#today_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgToday
