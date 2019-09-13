import React, { SVGProps } from 'react'

const SvgUpdate = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="update_svg__a"
        d="M14 6.747H9.48l1.827-1.88C9.487 3.067 6.54 3 4.72 4.8a4.583 4.583 0 000 6.527 4.68 4.68 0 006.587 0c.906-.894 1.36-1.94 1.36-3.26H14c0 1.32-.587 3.033-1.76 4.193-2.34 2.32-6.14 2.32-8.48 0-2.333-2.313-2.353-6.073-.013-8.387a5.991 5.991 0 018.433 0L14 2v4.747zM8.333 5.333v2.834l2.334 1.386-.48.807-2.854-1.693V5.333h1z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="update_svg__b" fill="#fff">
        <use xlinkHref="#update_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#update_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgUpdate
