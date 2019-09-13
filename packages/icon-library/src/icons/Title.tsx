import React, { SVGProps } from 'react'

const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path id="title_svg__a" d="M3.333 2.667v2H7v8h2v-8h3.667v-2z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="title_svg__b" fill="#fff">
        <use xlinkHref="#title_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#title_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTitle
