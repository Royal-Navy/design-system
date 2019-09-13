import React, { SVGProps } from 'react'

const SvgSelectAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="select-all_svg__a"
        d="M2 3.333h1.333V2C2.6 2 2 2.6 2 3.333zm0 5.334h1.333V7.333H2v1.334zM4.667 14H6v-1.333H4.667V14zM2 6h1.333V4.667H2V6zm6.667-4H7.333v1.333h1.334V2zm4 0v1.333H14C14 2.6 13.4 2 12.667 2zM3.333 14v-1.333H2C2 13.4 2.6 14 3.333 14zM2 11.333h1.333V10H2v1.333zM6 2H4.667v1.333H6V2zm1.333 12h1.334v-1.333H7.333V14zm5.334-5.333H14V7.333h-1.333v1.334zm0 5.333C13.4 14 14 13.4 14 12.667h-1.333V14zm0-8H14V4.667h-1.333V6zm0 5.333H14V10h-1.333v1.333zM10 14h1.333v-1.333H10V14zm0-10.667h1.333V2H10v1.333zm-5.333 8h6.666V4.667H4.667v6.666zM6 6h4v4H6V6z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="select-all_svg__b" fill="#fff">
        <use xlinkHref="#select-all_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#select-all_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSelectAll
