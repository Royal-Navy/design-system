import React, { SVGProps } from 'react'

const SvgPublish = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="publish_svg__a"
        d="M2.667 1.778v1.778h10.666V1.778H2.667zm0 8h2.666v4.444h5.334V9.778h2.666L8 4.444 2.667 9.778z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="publish_svg__b" fill="#fff">
        <use xlinkHref="#publish_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#publish_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPublish
