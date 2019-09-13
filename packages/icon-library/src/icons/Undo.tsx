import React, { SVGProps } from 'react'

const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="undo_svg__a"
        d="M8.333 5.333c-1.766 0-3.366.66-4.6 1.734l-2.4-2.4v6h6L4.92 8.253A5.302 5.302 0 018.333 7c2.36 0 4.367 1.54 5.067 3.667l1.58-.52c-.927-2.794-3.547-4.814-6.647-4.814z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="undo_svg__b" fill="#fff">
        <use xlinkHref="#undo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#undo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgUndo
