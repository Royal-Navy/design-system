import React, { SVGProps } from 'react'

const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="drag-handle_svg__a"
        d="M13.333 6H2.667v1.333h10.666V6zM2.667 10h10.666V8.667H2.667V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="drag-handle_svg__b" fill="#fff">
        <use xlinkHref="#drag-handle_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#drag-handle_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDragHandle
