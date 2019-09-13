import React, { SVGProps } from 'react'

const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="gavel_svg__a"
        d="M.667 14h8v1.333h-8V14zm2.83-8.62l1.886-1.885 9.427 9.428-1.885 1.886L3.497 5.38zM8.21.667l3.772 3.77-1.887 1.887-3.77-3.773L8.212.667zM2.55 6.323l3.771 3.772-1.885 1.885L.665 8.209 2.55 6.323z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="gavel_svg__b" fill="#fff">
        <use xlinkHref="#gavel_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#gavel_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGavel
