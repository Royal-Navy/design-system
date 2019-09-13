import React, { SVGProps } from 'react'

const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="redo_svg__a"
        d="M12.267 7.067a6.976 6.976 0 00-4.6-1.734c-3.1 0-5.72 2.02-6.64 4.814l1.573.52A5.335 5.335 0 017.667 7c1.3 0 2.486.48 3.413 1.253l-2.413 2.414h6v-6l-2.4 2.4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="redo_svg__b" fill="#fff">
        <use xlinkHref="#redo_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#redo_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgRedo
