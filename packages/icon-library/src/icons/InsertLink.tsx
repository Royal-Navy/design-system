import React, { SVGProps } from 'react'

const SvgInsertLink = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="insert-link_svg__a"
        d="M1.689 8c0-1.031.835-1.867 1.867-1.867H7.11V4.444H3.556A3.555 3.555 0 000 8a3.555 3.555 0 003.556 3.556H7.11v-1.69H3.556A1.866 1.866 0 011.689 8zm10.755-3.556H8.89v1.69h3.555a1.866 1.866 0 110 3.733H8.89v1.689h3.555A3.555 3.555 0 0016 8a3.555 3.555 0 00-3.556-3.556zM5.334 8.89h5.333V7.11H5.333V8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="insert-link_svg__b" fill="#fff">
        <use xlinkHref="#insert-link_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#insert-link_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInsertLink
