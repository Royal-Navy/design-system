import React, { SVGProps } from 'react'

const SvgWork = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="work_svg__a"
        d="M13.333 4h-2.666V2.667c0-.74-.594-1.334-1.334-1.334H6.667c-.74 0-1.334.594-1.334 1.334V4H2.667c-.74 0-1.327.593-1.327 1.333l-.007 7.334c0 .74.594 1.333 1.334 1.333h10.666c.74 0 1.334-.593 1.334-1.333V5.333c0-.74-.594-1.333-1.334-1.333zm-4 0H6.667V2.667h2.666V4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="work_svg__b" fill="#fff">
        <use xlinkHref="#work_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#work_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgWork
