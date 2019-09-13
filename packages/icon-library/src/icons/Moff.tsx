import React, { SVGProps } from 'react'

const SvgMoff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="moff_svg__a"
        d="M12.667 7.333h-1.134c0 .494-.106.954-.286 1.367l.82.82a4.39 4.39 0 00.6-2.187zm-2.68.114c0-.04.013-.074.013-.114v-4c0-1.106-.893-2-2-2s-2 .894-2 2v.12l3.987 3.994zM2.847 2L2 2.847l4.007 4.006v.48c0 1.107.886 2 1.993 2 .147 0 .293-.02.433-.053l1.107 1.107c-.473.22-1 .346-1.54.346-1.84 0-3.533-1.4-3.533-3.4H3.333c0 2.274 1.814 4.154 4 4.48V14h1.334v-2.187c.606-.086 1.18-.3 1.693-.6L13.153 14l.847-.847L2.847 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="moff_svg__b" fill="#fff">
        <use xlinkHref="#moff_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#moff_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgMoff
