import React, { SVGProps } from 'react'

const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="texture_svg__a"
        d="M13.007 2.053L2.053 13.007c.06.226.18.433.34.6.167.16.374.28.6.34l10.96-10.954a1.335 1.335 0 00-.946-.94zM7.92 2L2 7.92v1.887L9.807 2H7.92zM3.333 2C2.6 2 2 2.6 2 3.333v1.334L4.667 2H3.333zm9.334 12c.366 0 .7-.147.94-.393.246-.24.393-.574.393-.94v-1.334L11.333 14h1.334zm-6.474 0H8.08L14 8.08V6.193L6.193 14z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="texture_svg__b" fill="#fff">
        <use xlinkHref="#texture_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#texture_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgTexture
