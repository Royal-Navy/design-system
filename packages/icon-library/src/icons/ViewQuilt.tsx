import React, { SVGProps } from 'react'

const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="view-quilt_svg__a"
        d="M6.667 12H10V8H6.667v4zm-4 0H6V3.333H2.667V12zm8 0H14V8h-3.333v4zm-4-8.667v4H14v-4H6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="view-quilt_svg__b" fill="#fff">
        <use xlinkHref="#view-quilt_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#view-quilt_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgViewQuilt
