import React, { SVGProps } from 'react'

const SvgDehaze = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="dehaze_svg__a"
        d="M1.333 10.333v1.334h13.334v-1.334H1.333zm0-3.333v1.333h13.334V7H1.333zm0-3.333V5h13.334V3.667H1.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="dehaze_svg__b" fill="#fff">
        <use xlinkHref="#dehaze_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#dehaze_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgDehaze
