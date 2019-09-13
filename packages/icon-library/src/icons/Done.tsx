import React, { SVGProps } from 'react'

const SvgDone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="done_svg__a"
        d="M6 10.8L3.2 8l-.933.933L6 12.667l8-8-.933-.934z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="done_svg__b" fill="#fff">
        <use xlinkHref="#done_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#done_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDone
