import React, { SVGProps } from 'react'

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="edit_svg__a"
        d="M2 11.5V14h2.5l7.373-7.373-2.5-2.5L2 11.5zm11.807-6.807c.26-.26.26-.68 0-.94l-1.56-1.56a.664.664 0 00-.94 0l-1.22 1.22 2.5 2.5 1.22-1.22z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="edit_svg__b" fill="#fff">
        <use xlinkHref="#edit_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#edit_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEdit
