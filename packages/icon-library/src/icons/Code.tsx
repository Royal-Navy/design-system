import React, { SVGProps } from 'react'

const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="code_svg__a"
        d="M6.267 11.067L3.2 8l3.067-3.067L5.333 4l-4 4 4 4 .934-.933zm3.466 0L12.8 8 9.733 4.933 10.667 4l4 4-4 4-.934-.933z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="code_svg__b" fill="#fff">
        <use xlinkHref="#code_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#code_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCode
