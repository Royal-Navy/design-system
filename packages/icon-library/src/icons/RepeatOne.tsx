import React, { SVGProps } from 'react'

const SvgRepeatOne = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="repeat-one_svg__a"
        d="M4.667 4.667h6.666v2L14 4l-2.667-2.667v2h-8v4h1.334V4.667zm6.666 6.666H4.667v-2L2 12l2.667 2.667v-2h8v-4h-1.334v2.666zM8.667 10V6H8l-1.333.667v.666h1V10h1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="repeat-one_svg__b" fill="#fff">
        <use xlinkHref="#repeat-one_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#repeat-one_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRepeatOne
