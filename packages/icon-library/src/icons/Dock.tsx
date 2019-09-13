import React, { SVGProps } from 'react'

const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="dock_svg__a"
        d="M5.333 15.333h5.334V14H5.333v1.333zM10.667.673L5.333.667C4.6.667 4 1.267 4 2v9.333c0 .734.6 1.334 1.333 1.334h5.334c.733 0 1.333-.6 1.333-1.334V2c0-.733-.6-1.327-1.333-1.327zm0 9.327H5.333V3.333h5.334V10z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dock_svg__b" fill="#fff">
        <use xlinkHref="#dock_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#dock_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDock
