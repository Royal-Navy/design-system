import React, { SVGProps } from 'react'

const SvgVisibility = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="visibility_svg__a"
        d="M8 3C4.667 3 1.82 5.073.667 8c1.153 2.927 4 5 7.333 5s6.18-2.073 7.333-5c-1.153-2.927-4-5-7.333-5zm0 8.333a3.335 3.335 0 010-6.666 3.335 3.335 0 010 6.666zM8 6c-1.107 0-2 .893-2 2s.893 2 2 2 2-.893 2-2-.893-2-2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="visibility_svg__b" fill="#fff">
        <use xlinkHref="#visibility_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#visibility_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgVisibility
