import React, { SVGProps } from 'react'

const SvgDeleteSweep = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="delete-sweep_svg__a"
        d="M10 10.667h2.667V12H10v-1.333zm0-5.334h4.667v1.334H10V5.333zM10 8h4v1.333h-4V8zm-8 4c0 .733.6 1.333 1.333 1.333h4c.734 0 1.334-.6 1.334-1.333V5.333H2V12zm7.333-8.667h-2l-.666-.666H4l-.667.666h-2v1.334h8V3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="delete-sweep_svg__b" fill="#fff">
        <use xlinkHref="#delete-sweep_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#delete-sweep_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDeleteSweep
