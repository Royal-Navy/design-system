import React, { SVGProps } from 'react'

const SvgControlPointDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="control-point-duplicate_svg__a"
        d="M10.667 5.333H9.333v2h-2v1.334h2v2h1.334v-2h2V7.333h-2v-2zM1.333 8a4.66 4.66 0 012.674-4.213v-1.44C1.68 3.173 0 5.393 0 8c0 2.607 1.68 4.827 4.007 5.653v-1.44A4.66 4.66 0 011.333 8zM10 2C6.693 2 4 4.693 4 8s2.693 6 6 6 6-2.693 6-6-2.693-6-6-6zm0 10.667A4.672 4.672 0 015.333 8 4.672 4.672 0 0110 3.333 4.672 4.672 0 0114.667 8 4.672 4.672 0 0110 12.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="control-point-duplicate_svg__b" fill="#fff">
        <use xlinkHref="#control-point-duplicate_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#control-point-duplicate_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgControlPointDuplicate
