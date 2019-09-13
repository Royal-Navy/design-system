import React, { SVGProps } from 'react'

const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="colorize_svg__a"
        d="M13.807 3.753l-1.56-1.56a.664.664 0 00-.94 0l-2.08 2.08L7.94 3 7 3.94l.947.947L2 10.833V14h3.167l5.946-5.947.947.947.94-.94-1.28-1.28L13.8 4.7a.666.666 0 00.007-.947zm-9.194 8.914l-1.28-1.28 5.374-5.374 1.28 1.28-5.374 5.374z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="colorize_svg__b" fill="#fff">
        <use xlinkHref="#colorize_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#colorize_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgColorize
