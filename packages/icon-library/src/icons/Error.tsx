import React, { SVGProps } from 'react'

const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="error_svg__a"
        d="M8 .916a7.11 7.11 0 00-7.111 7.11A7.11 7.11 0 008 15.139a7.11 7.11 0 007.111-7.111A7.11 7.11 0 008 .916zm.889 10.64H7.11V9.778H8.89v1.778zm0-2.667H7.11V4.444H8.89V8.89z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="error_svg__b" fill="#fff">
        <use xlinkHref="#error_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#error_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgError
