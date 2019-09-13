import React, { SVGProps } from 'react'

const SvgSpellcheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="spellcheck_svg__a"
        d="M8.3 10.667h1.393L6.287 2h-1.24L1.64 10.667h1.393l.747-2h3.76l.76 2zM4.287 7.333l1.38-3.68 1.38 3.68h-2.76zm10.106.394L9 13.12l-2.447-2.453-.94.94L9.007 15l6.326-6.333-.94-.94z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="spellcheck_svg__b" fill="#fff">
        <use xlinkHref="#spellcheck_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#spellcheck_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSpellcheck
