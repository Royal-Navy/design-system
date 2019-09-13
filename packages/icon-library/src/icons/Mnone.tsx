import React, { SVGProps } from 'react'

const SvgMnone = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="mnone_svg__a"
        d="M8 9.333a1.992 1.992 0 001.993-2l.007-4c0-1.106-.893-2-2-2s-2 .894-2 2v4c0 1.107.893 2 2 2zm-.8-6.066c0-.44.36-.8.8-.8.44 0 .8.36.8.8L8.793 7.4a.797.797 0 11-1.593 0V3.267zm4.333 4.066c0 2-1.693 3.4-3.533 3.4-1.84 0-3.533-1.4-3.533-3.4H3.333c0 2.274 1.814 4.154 4 4.48V14h1.334v-2.187c2.186-.32 4-2.2 4-4.48h-1.134z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mnone_svg__b" fill="#fff">
        <use xlinkHref="#mnone_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#mnone_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMnone
