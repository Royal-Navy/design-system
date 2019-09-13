import React, { SVGProps } from 'react'

const SvgGroupWork = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="group-work_svg__a"
        d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zM5.333 11.667a1.667 1.667 0 11.002-3.335 1.667 1.667 0 01-.002 3.335zm1-6.334a1.667 1.667 0 113.335.002 1.667 1.667 0 01-3.335-.002zm4.334 6.334a1.667 1.667 0 110-3.335 1.667 1.667 0 010 3.335z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="group-work_svg__b" fill="#fff">
        <use xlinkHref="#group-work_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#group-work_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGroupWork
