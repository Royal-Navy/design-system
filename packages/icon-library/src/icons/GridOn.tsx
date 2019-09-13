import React, { SVGProps } from 'react'

const SvgGridOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="grid-on_svg__a"
        d="M13.333 1.333H2.667c-.734 0-1.334.6-1.334 1.334v10.666c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334V2.667c0-.734-.6-1.334-1.334-1.334zm-8 12H2.667v-2.666h2.666v2.666zm0-4H2.667V6.667h2.666v2.666zm0-4H2.667V2.667h2.666v2.666zm4 8H6.667v-2.666h2.666v2.666zm0-4H6.667V6.667h2.666v2.666zm0-4H6.667V2.667h2.666v2.666zm4 8h-2.666v-2.666h2.666v2.666zm0-4h-2.666V6.667h2.666v2.666zm0-4h-2.666V2.667h2.666v2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="grid-on_svg__b" fill="#fff">
        <use xlinkHref="#grid-on_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#grid-on_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgGridOn
