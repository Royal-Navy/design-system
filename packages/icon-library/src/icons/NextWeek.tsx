import React, { SVGProps } from 'react'

const SvgNextWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="next-week_svg__a"
        d="M13.333 4.667h-2.666V3.333c0-.366-.147-.7-.394-.94A1.304 1.304 0 009.333 2H6.667c-.734 0-1.334.6-1.334 1.333v1.334H2.667c-.734 0-1.334.6-1.334 1.333v7.333c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V6c0-.733-.6-1.333-1.334-1.333zM6.667 3.333h2.666v1.334H6.667V3.333zm.666 9l-.666-.666 2-2-2-2L7.333 7 10 9.667l-2.667 2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="next-week_svg__b" fill="#fff">
        <use xlinkHref="#next-week_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#next-week_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNextWeek
