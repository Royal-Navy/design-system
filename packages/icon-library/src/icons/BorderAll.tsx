import React, { SVGProps } from 'react'

const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="border-all_svg__a"
        d="M1.778 1.778v12.444h12.444V1.778H1.778zM7.11 12.444H3.556V8.89H7.11v3.555zm0-5.333H3.556V3.556H7.11V7.11zm5.333 5.333H8.89V8.89h3.555v3.555zm0-5.333H8.89V3.556h3.555V7.11z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="border-all_svg__b" fill="#fff">
        <use xlinkHref="#border-all_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#border-all_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgBorderAll
