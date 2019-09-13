import React, { SVGProps } from 'react'

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="list_svg__a"
        d="M2 8.667h1.333V7.333H2v1.334zm0 2.666h1.333V10H2v1.333zM2 6h1.333V4.667H2V6zm2.667 2.667H14V7.333H4.667v1.334zm0 2.666H14V10H4.667v1.333zm0-6.666V6H14V4.667H4.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="list_svg__b" fill="#fff">
        <use xlinkHref="#list_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#list_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgList
