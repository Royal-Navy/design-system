import React, { SVGProps } from 'react'

const SvgReorder = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="reorder_svg__a"
        d="M2 10h12V8.667H2V10zm0 2.667h12v-1.334H2v1.334zm0-5.334h12V6H2v1.333zm0-4v1.334h12V3.333H2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="reorder_svg__b" fill="#fff">
        <use xlinkHref="#reorder_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#reorder_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReorder
