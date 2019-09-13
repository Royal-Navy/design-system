import React, { SVGProps } from 'react'

const SvgInput = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="input_svg__a"
        d="M14 2.007H2c-.733 0-1.333.6-1.333 1.333V6H2V3.327h12v9.353H2V10H.667v2.673c0 .734.6 1.32 1.333 1.32h12c.733 0 1.333-.586 1.333-1.32V3.34c0-.74-.6-1.333-1.333-1.333zm-6.667 8.66L10 8 7.333 5.333v2H.667v1.334h6.666v2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="input_svg__b" fill="#fff">
        <use xlinkHref="#input_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#input_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgInput
