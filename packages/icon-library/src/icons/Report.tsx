import React, { SVGProps } from 'react'

const SvgReport = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="report_svg__a"
        d="M10.487 2H5.513L2 5.513v4.974L5.513 14h4.974L14 10.487V5.513L10.487 2zM8 11.533a.865.865 0 01-.867-.866c0-.48.387-.867.867-.867s.867.387.867.867-.387.866-.867.866zm.667-2.866H7.333v-4h1.334v4z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="report_svg__b" fill="#fff">
        <use xlinkHref="#report_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#report_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgReport
