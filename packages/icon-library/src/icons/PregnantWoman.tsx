import React, { SVGProps } from 'react'

const SvgPregnantWoman = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="pregnant-woman_svg__a"
        d="M6 2.667c0-.74.593-1.334 1.333-1.334s1.334.594 1.334 1.334C8.667 3.407 8.073 4 7.333 4 6.593 4 6 3.407 6 2.667zm4.667 6a2.19 2.19 0 00-1.334-2c0-1.107-.893-2-2-2-1.106 0-2 .893-2 2v4.666h1.334v3.334h2v-3.334h2V8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="pregnant-woman_svg__b" fill="#fff">
        <use xlinkHref="#pregnant-woman_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#pregnant-woman_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPregnantWoman
