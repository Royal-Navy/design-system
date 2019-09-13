import React, { SVGProps } from 'react'

const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-module_svg__a"
        d="M2.667 7.333H6v-4H2.667v4zm0 4.667H6V8H2.667v4zm4 0H10V8H6.667v4zm4 0H14V8h-3.333v4zm-4-4.667H10v-4H6.667v4zm4-4v4H14v-4h-3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-module_svg__b" fill="#fff">
        <use xlinkHref="#view-module_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-module_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewModule
