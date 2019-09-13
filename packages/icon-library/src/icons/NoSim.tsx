import React, { SVGProps } from 'react'

const SvgNoSim = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="no-sim_svg__a"
        d="M12.66 3.333C12.66 2.6 12.067 2 11.333 2H6.667l-1.56 1.56 7.56 7.56-.007-7.787zM2.433 2.587l-.846.846L3.333 5.18v7.487c0 .733.6 1.333 1.334 1.333h6.673c.233 0 .447-.067.64-.173l1.253 1.253.847-.847L2.433 2.587z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="no-sim_svg__b" fill="#fff">
        <use xlinkHref="#no-sim_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#no-sim_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgNoSim
