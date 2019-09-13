import React, { SVGProps } from 'react'

const SvgLocalMall = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="local-mall_svg__a"
        d="M12.667 4h-1.334a3.335 3.335 0 00-6.666 0H3.333c-.733 0-1.326.6-1.326 1.333l-.007 8c0 .734.6 1.334 1.333 1.334h9.334c.733 0 1.333-.6 1.333-1.334v-8C14 4.6 13.4 4 12.667 4zM8 2c1.107 0 2 .893 2 2H6c0-1.107.893-2 2-2zm0 6.667a3.335 3.335 0 01-3.333-3.334H6c0 1.107.893 2 2 2s2-.893 2-2h1.333A3.335 3.335 0 018 8.667z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="local-mall_svg__b" fill="#fff">
        <use xlinkHref="#local-mall_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#local-mall_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLocalMall
