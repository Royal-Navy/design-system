import React, { SVGProps } from 'react'

const SvgClass = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="class_svg__a"
        d="M12 1.333H4c-.733 0-1.333.6-1.333 1.334v10.666c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V2.667c0-.734-.6-1.334-1.333-1.334zM4 2.667h3.333V8L5.667 7 4 8V2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="class_svg__b" fill="#fff">
        <use xlinkHref="#class_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#class_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgClass
