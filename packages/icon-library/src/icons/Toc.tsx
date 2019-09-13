import React, { SVGProps } from 'react'

const SvgToc = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="toc_svg__a"
        d="M2 6h9.333V4.667H2V6zm0 2.667h9.333V7.333H2v1.334zm0 2.666h9.333V10H2v1.333zm10.667 0H14V10h-1.333v1.333zm0-6.666V6H14V4.667h-1.333zm0 4H14V7.333h-1.333v1.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="toc_svg__b" fill="#fff">
        <use xlinkHref="#toc_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#toc_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgToc
