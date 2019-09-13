import React, { SVGProps } from 'react'

const SvgLocalDrink = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-drink_svg__a"
        d="M2 1.333l1.34 12.154c.08.666.64 1.18 1.327 1.18h6.666c.687 0 1.247-.514 1.327-1.18L14 1.333H2zm6 11.334c-1.107 0-2-.894-2-2 0-1.334 2-3.6 2-3.6s2 2.266 2 3.6c0 1.106-.893 2-2 2zm4.22-7.334H3.78l-.293-2.666h9.02l-.287 2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-drink_svg__b" fill="#fff">
        <use xlinkHref="#local-drink_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-drink_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalDrink
