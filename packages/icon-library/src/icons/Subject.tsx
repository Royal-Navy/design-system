import React, { SVGProps } from 'react'

const SvgSubject = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="subject_svg__a"
        d="M9.333 11.333H2.667v1.334h6.666v-1.334zm4-5.333H2.667v1.333h10.666V6zM2.667 10h10.666V8.667H2.667V10zm0-6.667v1.334h10.666V3.333H2.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="subject_svg__b" fill="#fff">
        <use xlinkHref="#subject_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#subject_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSubject
