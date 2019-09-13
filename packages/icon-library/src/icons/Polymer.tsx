import React, { SVGProps } from 'react'

const SvgPolymer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="polymer_svg__a"
        d="M12.667 2.667H10l-5.26 8.42L3 8l3-5.333H3.333L.333 8l3 5.333H6l5.26-8.42L13 8l-3 5.333h2.667l3-5.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="polymer_svg__b" fill="#fff">
        <use xlinkHref="#polymer_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#polymer_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgPolymer
