import React, { SVGProps } from 'react'

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="link_svg__a"
        d="M2.6 8c0-1.14.927-2.067 2.067-2.067h2.666V4.667H4.667a3.335 3.335 0 000 6.666h2.666v-1.266H4.667A2.068 2.068 0 012.6 8zm2.733.667h5.334V7.333H5.333v1.334zm6-4H8.667v1.266h2.666c1.14 0 2.067.927 2.067 2.067 0 1.14-.927 2.067-2.067 2.067H8.667v1.266h2.666a3.335 3.335 0 000-6.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="link_svg__b" fill="#fff">
        <use xlinkHref="#link_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#link_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLink
