import React, { SVGProps } from 'react'

const SvgLiveTv = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="live-tv_svg__a"
        d="M14 4H8.94l2.193-2.193-.466-.474L8 4 5.333 1.333l-.473.474L7.06 4H2C1.267 4 .667 4.593.667 5.333v8c0 .734.6 1.334 1.333 1.334h12c.733 0 1.333-.6 1.333-1.334v-8c0-.74-.6-1.333-1.333-1.333zm0 9.333H2v-8h12v8zM6 6.667V12l4.667-2.667L6 6.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="live-tv_svg__b" fill="#fff">
        <use xlinkHref="#live-tv_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#live-tv_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLiveTv
