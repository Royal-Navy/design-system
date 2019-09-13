import React, { SVGProps } from 'react'

const SvgViewHeadline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-headline_svg__a"
        d="M2.667 10h10.666V8.667H2.667V10zm0 2.667h10.666v-1.334H2.667v1.334zm0-5.334h10.666V6H2.667v1.333zm0-4v1.334h10.666V3.333H2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-headline_svg__b" fill="#fff">
        <use xlinkHref="#view-headline_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-headline_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewHeadline
